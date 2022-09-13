import inventoryWindowConfig from "../../../config/windows/inventoryWindowConfig"
import Window from "../../windows/Window"

class InventoryWindow extends Window {
    constructor(scene) {
        super(scene, inventoryWindowConfig)

        this.config = inventoryWindowConfig
        this.gold = this.config.gold.amound

        this.goldText = this.scene.add.text(this.config.gold.x, this.config.gold.y, this.gold + ' :Gold', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(1,0)
        this.windowContainer.add(this.goldText)
        console.log(this.scene.input)
    }

    updateGold(item){
        this.gold -= item.cost
        this.goldText.text = this.gold + ' :Gold'
    }
}
export default InventoryWindow
