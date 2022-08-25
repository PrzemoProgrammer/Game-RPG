import Phaser from 'phaser';
import Button from "../componens/Button";
import Inventory from "../componens/HUD/inventory/Inventory";
import Status from "../componens/HUD/status/Status"
import BottomBar from "../componens/HUD/bottomBar/BottomBar"
import { HUD_SCENE } from './scenes'

class HudScene extends Phaser.Scene {

    constructor() {
        super('HudScene');
      }

      create(){
        HUD_SCENE.setScene(this)
      
        this.bottomBar = new BottomBar(this, 230, 530, 'skillsBannerHUD')
        this.status = new Status(this, 10, 10, 'profileHUD', 'profilePhotoHUD', 'profileBackgroundHUD')
        // this.inventory = new Window(this, 530, 190, 'window')
        // this.inventoryButton = new Button(this, 760, 565, 'inventoryButtonHUD').onClick(()=>{
        //     this.inventory.isOpen() ? this.inventory.closeInventory() : this.inventory.openInventory()
        // })
      }

      update() {

      }

   
    //   let ourGame = this.scene.get('PlayScene');
    // scoreText.setScrollFactor( 0 );
}
    
export default HudScene






