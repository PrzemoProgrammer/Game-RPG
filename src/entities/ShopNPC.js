import Entity from './Entity'

class ShopNPC extends Entity {
    constructor(scene, config) {
        super(scene, config)

        if(!config.hp){
            this.healthBar.healthBarContainer.visible = false
            this.healthBar.energybar.visible = false
        }
    }
    
    update(){

    }
}
export default ShopNPC