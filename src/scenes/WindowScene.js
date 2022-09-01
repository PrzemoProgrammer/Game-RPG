import Phaser from 'phaser';
import InventoryWindow from '../componens/HUD/inventory/InventoryWindow';
import inventoryWindowConfig from '../config/windows/inventoryWindowConfig';

class WindowScene extends Phaser.Scene {

    constructor() {
        super('WindowScene');
      }

      create(){
        // this.inventory = new InventoryWindow(this, inventoryWindowConfig)




        this.kanapka = this.add.sprite(100,  100, "mushroom-idle").setOrigin(0, 0)

      }

      update() {

      }
}
    
export default WindowScene






