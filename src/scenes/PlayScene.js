import Phaser from 'phaser';
import HandleInputs from '../utils/HandleInputs'
import Player from '../entities/Player'
import anims from '../animations/index'
import Mushroom from '../entities/Mushroom'
import Skeleton from '../entities/Skeleton'
import FlyingEye from '../entities/FlyingEye'
import enemiesConfig from '../config/enemies/index'
import playerConfig from '../config/player/player'

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
anims.forEach(anim => anim(this))
   
    this.gw = this.game.config.width;
    this.gh = this.game.config.height;

    this.enemy = []

    this.grass = this.add.image(0, 0, 'grass').setOrigin(0, 0)
    this.player = new Player(this, playerConfig)

    this.initSpawnEnemies()
  
    this.handleInputs = new HandleInputs(this)

    this.cameras.main.startFollow(this.player.characterContainer, false, 0.5 , 0.5, - this.player.characterContainer.body.width/2, - this.player.characterContainer.body.height/2)
    this.cameras.main.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);
    this.physics.world.setBounds(0, 0, this.grass.displayWidth, this.grass.displayHeight);

    // this.skeletonSwordCollidePlayer = this.physics.add.overlap(this.skeleton.swordHitbox.hitbox, this.player.characterContainer, this.updateTakePlayerSwordDamage, undefined, this)
    // this.playerBulletCollideSkeleton = this.physics.add.overlap(this.player.bullets, this.skeleton.characterContainer, this.updateTakeSkeletonBulletDamage, undefined, this)
  }

  update() {
    this.handleInputs.handleMovement()
    // this.skeleton.update()
    // this.mushroom.update()
    // this.flyingEye.update()
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

  updateTakeEnemySwordDamage(enemy){
    enemy.setTakeDamage(this.player.swordHitPower)

    if(enemy.isDead()) {
      this.respawnEnemy(enemy)
    }
  }

    updateTakePlayerSwordDamage(){
      this.player.setTakeDamage(this.skeleton.swordHitPower)
      this.skeletonSwordCollidePlayer.active = false
    }

    updateTakeSkeletonSwordDamage(){ // handleSkeletonHitByPlayerSword
      this.skeleton.setTakeDamage(this.player.swordHitPower)
      this.playerSwordCollideSkeleton.active = false
    }

    updateTakeSkeletonBulletDamage(enemy, bullet){
      this.skeleton.setTakeDamage(this.player.shootHitPower)
      bullet.setActive(false)
      bullet.setVisible(false)
      bullet.body.enable = false
    }

    updateDepth(){
      this.enemy.forEach(entity => entity.characterContainer.setDepth(entity.characterContainer.body.y + entity.characterContainer.body.height))
      this.player.characterContainer.setDepth(this.player.characterContainer.body.y + this.player.characterContainer.body.height)
    }
}

export default PlayScene;


// skille
// ekwipunek
// np ze sklepem
// jak dostane hita to shake i flash kamery
// chodzenie myszką i klawiszami (użyć tweena)
// kolizja z tójkątami


// popatrzeć tą drugą secene
