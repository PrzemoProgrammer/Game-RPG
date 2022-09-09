import InformationBoard from "../InformationBoard";

class Item {
    constructor(window, config) {
        this.window = window;
       
        this.cost = config.cost

        this.sprite = this.window.scene.add.sprite(config.x, config.y, config.sprite).setOrigin(0, 0).setDepth(1000) 

        this.itemInformation = new InformationBoard(this.window.scene, config)

        this.sprite.setInteractive()
        this.initPointer()
    }

    initPointer(){
        this.sprite.on('pointerover', () =>{

            let x = this.sprite.parentContainer.active ? x = this.sprite.parentContainer.x + this.sprite.x + this.sprite.width : x = this.sprite.x + this.sprite.width
            let y =  this.sprite.parentContainer.active ? y = this.sprite.parentContainer.y + this.sprite.y : y = this.sprite.y
    
            this.itemInformation.setPosition(x, y)
            this.itemInformation.openBoard()
        })
        
        this.sprite.on('pointerout', () =>{
            this.itemInformation.closeBoard()
        })
    }
}

export default Item