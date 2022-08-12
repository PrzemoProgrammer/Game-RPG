import { HUD_SCENE } from '../scenes/scenes'
import Entity from './Entity'
import AttackHitbox from '../combat/melee/AttackHitbox'
import {BulletGroup, Bullet} from '../combat/shootAttack/BulletGroup'
import FallRock from '../combat/abilities/FallRock'
import FreezeSpin from '../combat/abilities/FreezeSpin'

class Player extends Entity {
    constructor(scene, config) {
        super(scene, config)

        this.scene = scene
        this.swordHitPower = config.swordDamage
        this.shootHitPower = config.shootDamage

        this.canAttack = true

        this.frameIndexAnimSwordAttack = 5
        this.frameIndexAnimShootAttack = 4

        this.state = {
            idle: 'player-idle',
            walkRight: 'player-walk-right',
            takeHit: 'player-take-hit',
            death: 'player-death',
            attack: {
                sword: 'player-sword-attack',
                shoot: 'player-shoot-attack',
                fallRock: 'fall-rock-attack',
                freezeSpin:'freeze-spin-attack'
            } 
        }

        this.swordBounds = {
            offsetY:-10,
            w: 100,
            h: 105
        }

        this.bullets = {
            sprite: 'player-shoot-bullet',
            speed: 600
        }

        this.swordHitbox = new AttackHitbox(
            this, 
            this.swordBounds
        )

        this.bullets = new BulletGroup(this, this.bullets.sprite, this.bullets.speed)
    }

    update(){
        
    }

    setFreezeSpinAttack() {
        this.canMove = false, 
        this.canAttack = false,
        this.characterContainer.body.setVelocity(0),
        this.activeFreezeSpin()
        this.character.play(this.state.attack.freezeSpin, true)
            .on('animationupdate', (anim, frame) => {   
                if (frame.index === this.frameIndexAnimShootAttack){
                    // this.bullets.shoot(this.characterContainer.body.x + this.characterContainer.body.width, this.characterContainer.body.y + 15);
                    this.character.off('animationupdate')
            }})
            .once("animationcomplete",()=>{
                this.canMove = true, 
                this.canAttack = true, 
                this.character.play(this.state.idle, true);
      })    
    }

    setFallRockAttack() {
        if(HUD_SCENE.SCENE.bottomBar.fallingRockIcon.isLoading) return
            this.canMove = false, 
            this.canAttack = false,
            this.characterContainer.body.setVelocity(0),
            HUD_SCENE.SCENE.bottomBar.fallingRockIcon.startLoading()
            this.activeFallRockAbility()
            this.character.play(this.state.attack.fallRock, true)
                .on('animationupdate', (anim, frame) => {   
                    if (frame.index === this.frameIndexAnimShootAttack){
                        // this.bullets.shoot(this.characterContainer.body.x + this.characterContainer.body.width, this.characterContainer.body.y + 15);
                        this.character.off('animationupdate')
                }})
                .once("animationcomplete",()=>{
                    this.canMove = true, 
                    this.canAttack = true, 
                    this.character.play(this.state.idle, true);
        })    
    }

    setShootAttack(){
        this.canMove = false, 
        this.canAttack = false,
        this.characterContainer.body.setVelocity(0),
        this.character.play(this.state.attack.shoot, true)
            .on('animationupdate', (anim, frame) => {   
                if (frame.index === this.frameIndexAnimShootAttack){
                    this.bullets.shoot(this.characterContainer.body.x + this.characterContainer.body.width, this.characterContainer.body.y + 15);
                    this.character.off('animationupdate')
            }})
            .once("animationcomplete",()=>{
                this.canMove = true, 
                this.canAttack = true, 
                this.character.play(this.state.idle, true);
      })    
    }

    setSwordAttack(){
        if(this.isDead()) return
        this.canMove = false, 
        this.canAttack = false
        this.swordHitbox.resetPosition();
        this.characterContainer.body.setVelocity(0),
        this.character.play(this.state.attack.sword, true)
            .on('animationupdate', (anim, frame) => {   
                if (frame.index === this.frameIndexAnimSwordAttack){
                    this.scene.physics.world.enable(this.swordHitbox.hitbox)
                    this.character.off('animationupdate')
                }
            })
            .once("animationcomplete",()=>{
                this.canMove = true
                this.canAttack = true
                this.character.play(this.state.idle, true) 
            })
    }

    isFlipX(){
        return this.character.flipX
    }

    isDead(){
        return this.healthBar.health <= 0
    }

    kill(){
        this.canMove = false
        this.canAttack = false
        this.character.play(this.state.death, true).once("animationcomplete",()=>{
            this.character.anims.stop()
        }) 
    }

    setTakeDamage(damage){
        if(this.isDead()) return
        
        this.canMove = false
        this.attacked(damage)
        this.healthBar.update();
        HUD_SCENE.SCENE.status.healthBar.update()
        this.character.play(this.state.takeHit, true)
        .once("animationcomplete",()=>{
            this.character.play(this.state.idle, true) 
            this.canMove = true
        })
        if(this.isDead()) this.character.once("animationcomplete",()=>{
             this.kill()
        }) 
    }

    moveLeft(){
        this.character.flipX = true
        this.characterContainer.body.setVelocityX(-this.speed)
        this.character.play(this.state.walkRight, true)
    }

    moveRight(){
        this.character.flipX = false
        this.characterContainer.body.setVelocityX(this.speed)
        this.character.play(this.state.walkRight, true);
    }

    moveDown(){
        this.characterContainer.body.setVelocityY(-this.speed)
        this.character.play(this.state.walkRight, true);
    }

    moveUp(){
        this.characterContainer.body.setVelocityY(this.speed)
        this.character.play(this.state.walkRight, true);
    }

    setIdle(){
        this.character.play(this.state.idle, true);
        this.characterContainer.body.setVelocity(0)
    }

    attacked(damage) {
        this.healthBar.health -= damage;
        HUD_SCENE.SCENE.status.healthBar.bar -= damage
        this.healthBar.getHealBarWidth()
        HUD_SCENE.SCENE.status.healthBar.getBarWidth()
    }

    initMeteorite(){
        this.fallRock = new FallRock(this.scene, this.x, this.y, "meteorite", 'meteorite-fire', 'meteorite-explosion', 'ground-crash', 'ground-heat', 200)
    }

    activeFallRockAbility(){
        this.initMeteorite()
        this.fallRock.setPosition(this.character.flipX ? this.characterContainer.x - 300 : this.characterContainer.x, this.characterContainer.y)
        this.fallRock.active()
    }

    initFreezeSpin(){
        this.freezeSpin = new FreezeSpin(this.scene, this.x, this.y, "snowstorm", "ice", 200)    
    }

    activeFreezeSpin(){
        this.initFreezeSpin()
        this.freezeSpin.setPosition(this.characterContainer.x, this.characterContainer.y)
    }
}
export default Player