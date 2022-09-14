import Item from "./Item";

class HealthPotion extends Item {
    constructor(scene, config) {
        super(scene, config)

        this.config = config
        this.scene = scene
    }

    clone(){
        // return new Item(window, this.config)
    }
}
export default HealthPotion
