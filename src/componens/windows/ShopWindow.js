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

        this.createItemSlots()

        this.items = []

        this.createItems()
    }

    createItemSlots(){
        for(let i=0; i<this.slot.row; i++) {
            for(let j=0; j<this.slot.column; j++){

                let x = this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing) -131) 
                let y = this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing) -167) 

                this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
                this.windowContainer.add(this.tileSlot)
            }
        }
    }

    createItems(){
        itemsConfig.forEach(itemConfig => { 
            let item = null
             
            switch(itemConfig.type) {
                case "healthPotion" : item = new HealthPotion(this.scene, itemConfig); break;
                case "pinkSword" : item = new PinkSword(this.scene, itemConfig); break;
            }

            item.itemInformation.closeBoard()
            this.windowContainer.add(item.sprite)
            this.items.push(item)

        })
        // przekazać scene w metodzie
    }

    
}
export default ShopWindow
