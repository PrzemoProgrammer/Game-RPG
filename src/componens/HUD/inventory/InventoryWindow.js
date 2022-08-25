import ShopWindow from "../../windows/ShopWindow"

class InventoryWindow extends ShopWindow{
    constructor(scene, config) {
        super(scene)

        this.scene = scene
        this.config = config
    }

    // openInventory(){
    //     this.changeInventoryVisibility(true)
    // }

    // closeInventory() {
    //     this.changeInventoryVisibility(false)
    // }

    // changeInventoryVisibility(bool) {
    //     this.sprite.setVisible(bool).setActive(bool)
    // }

    // isOpen(){
    //     return this.sprite.visible
    // }
}
export default InventoryWindow