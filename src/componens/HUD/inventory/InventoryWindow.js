import inventoryWindowConfig from "../../../config/windows/inventoryWindowConfig"
import Item from "../../items/Item"
import Window from "../../windows/Window"
import HealthPotion from "../../items/HealthPotion"
import PinkSword from "../../items/PinkSword"



class InventoryWindow extends Window {
    constructor(scene) {
        super(scene, inventoryWindowConfig)

        this.config = inventoryWindowConfig
        this.gold = this.config.gold.amound

        this.goldText = this.scene.add.text(this.windowSprite.x  + this.windowSprite.displayWidth -10, this.windowSprite.y + this.windowSprite.displayHeight - 27, this.gold + ' :Gold', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(1,0)
        this.windowContainer.add(this.goldText)

        this.inventorySlots = []
        this.items = []

        this.slot = {
            maxRows: 5,
            maxColumns: 4,
            marginX: -12,
            marginY: 5,
            slotWeight: 53,
            slotHeight: 50,
            gridSpacing: 30
        }

        this.createItemSlots()
    }


     createItemSlots(){
        for(let i=0; i<this.slot.maxColumns; i++) {
            for(let j=0; j<this.slot.maxRows; j++){

                let x = this.windowSprite.x + this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing)) 
                let y = this.windowSprite.y + this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing)) 

                this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
                this.inventorySlots.push(this.tileSlot)
                this.windowContainer.add(this.tileSlot)
            }
        }
    }   

    isInventoryFull(){
        return this.items.length < this.slot.maxRows*this.slot.maxColumns
    }

    addItem(item){
       this.items.push(item)
       console.log(item)

       let index = this.items.map(object => object).indexOf(item);
        console.log(this.inventorySlots[index])
        let x = this.inventorySlots[index].x;
        let y = this.inventorySlots[index].y;


        // this.item = null
        // switch(item.config.type) {
        //     case "healthPotion" : this.item = new HealthPotion(this.scene, item.config); break;
        //     case "pinkSword" : this.item = new PinkSword(this.scene, item.config); break;
        // }

        console.log(this.item)

        // this.windowContainer.add(this.item.sprite)


        // this.item.sprite.x = x
        // this.item.sprite.y = y

  


        // this.item = this.scene.add.sprite( x, y, item.sprite.texture.key).setDepth(2000)

        
        this.items.push(this.item)

    }




    
    // createItemSlots(){
    //     for(let index=0; index<this.slot.maxColumns; index++) {
    //             // let x = this.slot.marginX + this.slot.slotWeight/2 + ( index* (this.slot.slotWeight/2 + this.slot.gridSpacing) -131) 
    //             // let y = this.slot.marginY + this.slot.slotHeight/2 + ( index* (this.slot.slotHeight/2 + this.slot.gridSpacing) -167) 


    //             let x = this.slot.marginX + this.slot.slotWeight/2 + (index % this.slot.maxColumns)* (this.slot.slotWeight/2 + this.slot.gridSpacing) -131
    //             let y = this.slot.marginY + this.slot.slotHeight/2 + Math.floor(index/this.slot.maxColumns)* (this.slot.slotHeight/2 + this.slot.gridSpacing) -167

    //             console.log(x)
    //             console.log(y)
    //             this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
    //             this.inventorySlots.push(this.tileSlot)
    //             this.windowContainer.add(this.tileSlot)
           
    //     }
    // }





    updateGold(item){
        this.gold -= item.cost
        this.goldText.text = this.gold + ' :Gold'
    }
}
export default InventoryWindow
