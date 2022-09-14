import InformationBoard from "../InformationBoard";

class Item {
    constructor(scene, config) {
        this.scene = scene;
        
        if(config.cost)
        this.cost = config.cost

        this.sprite = this.scene.add.sprite(config.x, config.y, config.sprite).setOrigin(0, 0).setDepth(1000) 

        this.itemInformation = new InformationBoard(this.scene, config)

        this.sprite.setInteractive()
        this.initPointer()
    }

    initPointer(){
        this.pointerOver()
        this.pointerOut()
    }

    pointerOver(){
        this.sprite.on('pointerover', () =>{
            let x = this.sprite.parentContainer.active ? x = this.sprite.parentContainer.x + this.sprite.x + this.sprite.width : x = this.sprite.x + this.sprite.width
            let y =  this.sprite.parentContainer.active ? y = this.sprite.parentContainer.y + this.sprite.y : y = this.sprite.y

            this.itemInformation.setPosition(x, y)
            this.itemInformation.openBoard()
        })
    }

    pointerOut(){
        this.sprite.on('pointerout', () =>{
            this.itemInformation.closeBoard()
        })
    }

    // setPosition(x,y){
        
    // }
}

export default Item