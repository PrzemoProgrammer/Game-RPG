import Phaser from 'phaser';
import Button from "../componens/Button";
import Inventory from "../componens/HUD/inventory/Inventory";

class HudScene extends Phaser.Scene {

    constructor() {
        super('HudScene');
      }

      create(){

        // this.skills = this.addElement(230, 530, 'skillsBannerHUD')
        // this.photo = new HudElement(this, 15, 15, 'playerProfilePhotoHUD')
        // this.character = new HudElement(this, 10, 10, 'profileHUD')
        this.inventory = new Inventory(this, 530, 190, 'inventoryHUD')
        this.inventoryButton = new Button(this, 730, 530, 'inventoryButtonHUD')
        
      }

      update() {
        
      }


    //   let ourGame = this.scene.get('PlayScene');
    //   this.input.on("pointerdown", this.throwKnife, this);
    // scoreText.setScrollFactor( 0 );
}
    
export default HudScene






