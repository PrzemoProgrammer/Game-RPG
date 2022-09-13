import initFlyingEyeAnims from "../../../animations/initFlyingEyeAnims"
import inventoryWindowConfig from "../../../config/windows/inventoryWindowConfig"
import Window from "../../windows/Window"

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

                let x = this.slot.marginX + this.slot.slotWeight/2 + ( i* (this.slot.slotWeight/2 + this.slot.gridSpacing) -131) 
                let y = this.slot.marginY + this.slot.slotHeight/2 + ( j* (this.slot.slotHeight/2 + this.slot.gridSpacing) -167) 

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
        // this.inventorySlots[index]
        console.log(this.inventorySlots[index])
        let x = this.inventorySlots[index].x
        let y = this.inventorySlots[index].y

        console.log(x)
        console.log(y)



        this.item = this.scene.add.sprite( x, y, item.sprite.texture.key).setOrigin(0, 0).setDepth(2000)
        this.windowContainer.add(this.item)


        // i teraz sprawdzić ten item jaki ma index w tablicy items i narysować sprita z x i y w tym samych wspołrzednych co index w tablicy slots

    //    this.scene.add.sprite( x, y, 'inventory-slot').setOrigin(0, 0).setDepth(1000)
    console.log(this.items)
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
