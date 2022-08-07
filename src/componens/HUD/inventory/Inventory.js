class Inventory {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite = this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)

        this.closeInventory()
    }

    openInventory(){
        this.changeInventoryVisibility(true)
    }

    closeInventory() {
        this.changeInventoryVisibility(false)
    }

    changeInventoryVisibility(bool) {
        this.sprite.setVisible(bool).setActive(bool)
    }

    isOpen(){
        return this.sprite.visible
    }
}
export default Inventory