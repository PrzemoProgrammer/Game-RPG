import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('grass', './src/assets/grass.png');
    this.load.image('healthBarContainer', './src/assets/healthBarContainer.png');
    this.load.image('healthBar', './src/assets/healthBar.png');

    this.load.spritesheet('player-idle', './src/assets/playerIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-walk-right', './src/assets/playerWalkRightSprite.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-take-hit', './src/assets/playerTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-death', './src/assets/playerDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-sword-attack', './src/assets/playerSwordAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

       this.load.spritesheet('player-shoot-attack', './src/assets/playerShootAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('player-shoot-bullet', './src/assets/playerShootBullet.png', {
        frameWidth: 288, frameHeight: 128
      });



      this.load.spritesheet('skeleton-idle', './src/assets/skeletonIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-take-hit', './src/assets/skeletonTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-death', './src/assets/skeletonDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-attack', './src/assets/skeletonAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('skeleton-walk-right', './src/assets/skeletonWalkRight.png', {
        frameWidth: 288, frameHeight: 128
      });





      this.load.spritesheet('mushroom-idle', './src/assets/mushroomIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-walk-right', './src/assets/mushroomWalkRight.png', {
        frameWidth: 288, frameHeight: 128
      });
      
      this.load.spritesheet('mushroom-take-hit', './src/assets/mushroomTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-death', './src/assets/mushroomDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('mushroom-attack', './src/assets/mushroomAttack.png', {
        frameWidth: 288, frameHeight: 128
      });

  



      

      this.load.spritesheet('flyingEye-idle', './src/assets/flyingEyeIdle.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-take-hit', './src/assets/flyingEyeTakeHit.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-death', './src/assets/flyingEyeDeath.png', {
        frameWidth: 288, frameHeight: 128
      });

      this.load.spritesheet('flyingEye-attack', './src/assets/flyingEyeAttack.png', {
        frameWidth: 288, frameHeight: 128
      });
     
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;