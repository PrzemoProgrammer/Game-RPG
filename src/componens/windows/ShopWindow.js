import shopWindowConfig from "../../config/windows/shopWindowConfig";
import HealthPotion from "../items/HealthPotion";
import PinkSword from "../items/PinkSword";
import Window from "./Window";
import itemsConfig from "../../config/items/index";
// import NPCsConfig from "../../config/NPC/index";


class ShopWindow extends Window {
    constructor(scene) {
        super(scene, shopWindowConfig)

        this.slot = {
            row: 4,
            column: 5,
            marginX: -12,
            marginY: 5,
            slotWeight: 53,
            slotHeight: 50,
            gridSpacing: 30
        }

        // NPCsConfig.forEach(NPCsConfig => { 
        //     if(NPCsConfig.windowType === "SHOP") {
        //         this.windowContainer.x = NPCsConfig.x -100
        //         this.windowContainer.y = NPCsConfig.y -150
        //     }
        //   })

        this.createSlots()
        this.createItems()
    }

    createSlots(){
        for(let i=0; i<this.slot.row; i++) {
            for(let j=0; j<this.slot.column; j++){

                let x = this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing)) 
                let y = this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing)) 

                this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
                this.windowContainer.add(this.tileSlot)
            }
        }
    }

    createItems(){
        itemsConfig.forEach(itemConfig => { 
            let item = null
             
            switch(itemConfig.type) {

            case "healthPotion" : item = new HealthPotion(this, itemConfig); break;
            case "pinkSword" : item = new PinkSword(this, itemConfig); break;
            }
            item.sprite.setInteractive()
            item.sprite.on('pointerover', () =>{
                item.showInformation()
            })
            
            item.sprite.on('pointerout', () =>{
                item.hideInformation()
            })


            // item.sprite.on('pointerdown', ()=> {
            //     item.sprite.setScale( 0.9 );
            // })
            this.windowContainer.add(item.sprite)
        })
    }
}
export default ShopWindow
