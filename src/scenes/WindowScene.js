import Phaser from 'phaser';
import { WINDOW_SCENE } from './scenes'
// import InventoryWindow from '../componens/HUD/inventory/InventoryWindow';
import QuestWindow from '../componens/windows/QuestWindow';
import ShopWindow from '../componens/windows/ShopWindow';




// import shopWindowConfig from "../config/windows/shopWindowConfig";
// import questWindowConfig from "../config/windows/questWindowConfig";

import NPCsConfig from "../config/NPC/index";


class WindowScene extends Phaser.Scene {

    constructor() {
        super('WindowScene');
      }

      create(){
        WINDOW_SCENE.setScene(this)

        this.NPCWindows = []

        // this.inventoryWindow = new InventoryWindow(this)


        this.initCreateNPCWindows()
        this.closeNPCWindows()

        this.kanapka = this.add.sprite(100,  100, "mushroom-idle").setOrigin(0, 0)
      }


      initCreateNPCWindows() {
        NPCsConfig.forEach(NPCConfig => { 
          this.createNPCWindows(NPCConfig)
        })
      }

      createNPCWindows(NPCConfig){
        let window = null;
      
        switch(NPCConfig.windowType) {
          case  "SHOP": window = this.shopWindow = new ShopWindow(this); break;
          case  "QUEST": window = new QuestWindow(this); break;
        }
        this.setWindowPosition(window, NPCConfig)
        this.addNPCWindow(window)
      }
      
      setWindowPosition(window, NPCConfig){
        window.windowContainer.x = NPCConfig.x - 100
        window.windowContainer.y = NPCConfig.y - 120
      }
      
      addNPCWindow(window){
        this.NPCWindows.unshift(window)
      }

      closeNPCWindows(){
        this.NPCWindows.forEach(window => window.closeWindow())
      }

      openWindow(type){

        this.NPCWindows.forEach( window => {
          if(window.config.type === type){
            window.openWindow()
          }
        })
      }




 






















      createNPCWindow(npc){
        console.log(npc)
        // this.shopWindow = new ShopWindow(this, npc)
        // this.questWindow = new QuestWindow(this,npc)
      }

      update() {

      }
}
    
export default WindowScene






