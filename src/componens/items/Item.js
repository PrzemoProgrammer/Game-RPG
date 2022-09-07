class Item {
    constructor(window, config) {
        this.window = window;
        this.config = config

        this.name = config.name
        this.description = config.description
        this.cost = config.cost

        this.sprite = this.window.scene.add.sprite(config.x,  config.y, config.sprite).setOrigin(0, 0)
        this.sprite.setDepth(1000) 
    }

    showInformation(){
        this.informationWindow = this.window.scene.add.sprite(this.window.windowContainer.x + this.sprite.x + this.sprite.width,  this.window.windowContainer.y + this.sprite.y, 'over-window-information').setOrigin(0, 0).setDepth(1001)
        this.createItemInformation()
    }

    hideInformation(){
        this.informationWindow.destroy()
        this.itemInformationContainer.destroy()
    }

    createItemInformation(){
        this.nameText = this.window.scene.add.text(this.informationWindow.width/2 , 0, this.name, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)
        this.descriptionText = this.window.scene.add.text(10, 50, this.description, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
        this.costText = this.window.scene.add.text(10, 150, "Cost: " +  this.cost, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)

        this.itemInformationContainer = this.window.scene.add.container(this.informationWindow.x, this.informationWindow.y, [this.nameText, this.descriptionText, this.costText]).setDepth(1003)
    }
}

export default Item