
import QuestWindow from '../componens/windows/QuestWindow'
import ShopWindow from '../componens/windows/ShopWindow'
import Window from '../componens/windows/Window'
import Entity from './Entity'


class NPC extends Entity {
    constructor(scene, config) {
        super(scene, config)

        this.character.x = -220


        //////////////////////////////////////////////////////////////
        // this.character.y = -190
        // this.characterContainer.body.height = 60
        //////////////////////////////////////////////////////////////



        if(!config.hp){
            this.healthBar.healthBarContainer.visible = false
            this.healthBar.energybar.visible = false
        }

        if(config.windowType === "SHOP") {
            this.window = new ShopWindow(this)
        } else if(config.windowType === "QUEST") {
            this.window = new QuestWindow(this)
        }
        this.window.closeWindow();
    }

    openWindow(){
        this.window.openWindow()
    }

    distance(target){
        const distance = Phaser.Math.Distance.BetweenPoints(this.characterContainer.body, target.characterContainer.body);

        if(distance > 200) {
            this.window.canOpen = true
        }
    }

    update(target){
        this.distance(target)
    }
}
export default NPC