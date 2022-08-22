import Phaser from 'phaser';
import { PLAY_SCENE } from './scenes';
import HandleInputs from '../utils/HandleInputs'
import MouseControl from '../utils/MouseControl';
import Player from '../entities/Player'
import Mushroom from '../entities/Mushroom'
import Skeleton from '../entities/Skeleton'
import FlyingEye from '../entities/FlyingEye'
import ShopNPC from '../entities/ShopNPC'
import anims from '../animations/index'
import enemiesConfig from '../config/enemies/index'
import playerConfig from '../config/player/player'
import shopNPCConfig from '../config/NPC/shopNPC'

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create({onPlaySceneCreated}) {
    this.onPlaySceneCreated = onPlaySceneCreated 
    PLAY_SCENE.setScene(this) 

    this.gw = this.game.config.width;
    this.gh = this.game.config.height;
    
    anims.forEach(anim => anim(this))

    this.enemy = []

    this.grass = this.add.image(0, 0, 'grass').setOrigin(0, 0)
    this.player = new Player(this, playerConfig)
    this.shopNPC = new ShopNPC(this, shopNPCConfig)

    this.initSpawnEnemies()
  
    this.handleInputs = new HandleInputs(this)
    this.mouseControl = new MouseControl(this)

    this.cameras.main.startFollow(this.player.characterContainer, false, 0.5 , 0.5, - this.player.characterContainer.body.width/2, - this.player.characterContainer.body.height/2)
    this.cameras.main.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);
    this.physics.world.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);
    this.onPlaySceneCreated() 
  }

  update() {
    this.handleInputs.handleMovement()
    this.mouseControl.handleMovement()
    this.enemy.forEach(entity => entity.update())
    this.updateDepth()
  }

  initSpawnEnemies() {
    enemiesConfig.forEach(enemyConfig => { 
      for(let i = 0; i < enemyConfig.count; ++i) {
        this.spawnEnemy(enemyConfig)
      }
    })
  }

  addEnemy(enemy) {
    this.enemy.push(enemy)
    this.physics.add.overlap(this.player.swordHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemySwordDamage(enemy), undefined, this)
    this.physics.add.overlap(enemy.swordHitbox.hitbox, this.player.characterContainer, () => this.updateTakePlayerSwordDamage(enemy), undefined, this)
    this.physics.add.overlap(this.player.bullets, enemy.characterContainer, (enemyContainer, bullet) => this.updateTakeEnemyBulletDamage(enemy, bullet), undefined, this)

    this.physics.add.overlap(this.player.fallRockHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemyFallRockDamage(enemy), undefined, this)
    this.physics.add.overlap(this.player.freezeSpinHitbox.hitbox, enemy.characterContainer, () => this.updateTakeEnemyFreezeSpinDamage(enemy), undefined, this)
  }

  removeEnemy(enemy) {
    const arrPosition = this.enemy.indexOf(enemy)
    this.enemy.splice(arrPosition, 1)
  }

  spawnEnemy(enemyConfig){
    let enemy = null;
  
    switch(enemyConfig.enemyType) {
      case  "mushroom": enemy = new Mushroom(this, enemyConfig); break;
      case  "skeleton": enemy = new Skeleton(this, enemyConfig); break;
      case  "flyingEye": enemy = new FlyingEye(this, enemyConfig); break;
    }
    this.addEnemy(enemy)
  }

  respawnEnemy(enemy) {
    this.removeEnemy(enemy)

    this.time.delayedCall(enemy.respawnTime, () => {
      enemy.character.destroy()
      this.spawnEnemy(enemy.config)
    })
  }

  updateTakePlayerSwordDamage(enemy){
    this.player.setTakeDamage(enemy.swordHitPower)
  }

  updateTakeEnemySwordDamage(enemy){
    enemy.setTakeDamage(this.player.swordHitPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateTakeEnemyFallRockDamage(enemy){
    enemy.setTakeDamage(this.player.fallRockPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateTakeEnemyFreezeSpinDamage(enemy){
    enemy.setTakeDamage(this.player.freezeSpinPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
      return
    }
    this.player.freezeSpin.activeFrozenState(enemy)
  }

  updateTakeEnemyBulletDamage(enemy, bullet){
    enemy.setTakeDamage(this.player.shootHitPower)
    bullet.setActive(false)
    bullet.setVisible(false)
    bullet.body.enable = false

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

  updateDepth(){
    this.enemy.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
    this.player.characterContainer.setDepth(this.player.characterContainer.body.y + this.player.characterContainer.body.height)
  }
}
export default PlayScene;


// naprawić bug klikanie myszką i w tym samym czasie klikanie skilla ( kalwiatura nei reaguje)
// ekwipunek
// np ze sklepem
// kolizja z tójkątami


