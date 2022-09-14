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

        this.goldText = this.scene.add.text(this.config.gold.x, this.config.gold.y, this.gold + ' :Gold', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(1,0)
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

                let x = this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing) -105) 
                let y = this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing) -142) 

                this.tileSlot = this.scene.add.sprite( x, y, 'inventory-slot').setDepth(1000)
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


        this.item = null
        switch(item.config.type) {
            case "healthPotion" : this.item = new HealthPotion(this.scene, item.config); break;
            case "pinkSword" : this.item = new PinkSword(this.scene, item.config); break;
        }

        // item.setPosition(x, y)
  


        // this.item = this.scene.add.sprite( x, y, item.sprite.texture.key).setDepth(2000)

        
        this.items.push(this.item)
        // this.windowContainer.add(this.item)
        // ! naprawić dodawanie do contenera
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
