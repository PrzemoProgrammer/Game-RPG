import shopWindowConfig from "../../config/windows/shopWindowConfig";
import HealthPotion from "../items/HealthPotion";
import PinkSword from "../items/PinkSword";
import Window from "./Window";
import itemsConfig from "../../config/items/index";
// import HealthPotionConfig from "../../config/items/HealthPotionConfig";
// import NPCsConfig from "../../config/NPC/index";


class ShopWindow extends Window {
    constructor(scene) {
        super(scene, shopWindowConfig)
     
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

        // this.healthPotion = new HealthPotion(this.scene, HealthPotionConfig)
        // console.log(this.healthPotion)
        // this.healthPotion.x = 100
        // this.healthPotion.y = 100

        this.createItemSlots()
        this.createItems()
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

    createItems(){

        itemsConfig.forEach(itemConfig => { 
            let item = null
             
            switch(itemConfig.type) {
                case "healthPotion" : item = new HealthPotion(this.scene, itemConfig); break;
                case "pinkSword" : item = new PinkSword(this.scene, itemConfig); break;
            }

            console.log(item)
            item.x = 100
            item.y = 100
            // item.itemInformation.closeBoard()
            // this.windowContainer.add(item)
            // this.items.push(item)

        })
      
    }

    addItem(){
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

    //! nie widać sprajta itema. prawdopodobnie coś w klasie Item bo jak tu tworze tak o (zobacz wyzej) to tez nie widać
    //! wejdz w klase sprita tam jest napisane co mozesz sprobowac zrobić
}
export default ShopWindow
