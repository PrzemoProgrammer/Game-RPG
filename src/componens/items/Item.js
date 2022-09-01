class Item {
    constructor(window, config) {
        this.window = window;
        this.config = config

        this.sprite = this.window.entity.scene.add.sprite(config.x,  config.y, config.sprite).setOrigin(0, 0)
        this.sprite.setDepth(1000)

        this.name = config.name
        this.description = config.description
        this.cost = config.cost
    }

    showInformation(){
        this.informationWindow = this.window.entity.scene.add.sprite(this.window.windowContainer.x + this.sprite.x + this.sprite.width,  this.window.windowContainer.y + this.sprite.y, 'over-window-information').setOrigin(0, 0).setDepth(1001)
        this.createItemInformation()
    }

    hideInformation(){
        this.informationWindow.destroy()
        this.itemInformationContainer.destroy()
    }

    createItemInformation(){
        this.nameText = this.window.entity.scene.add.text(this.informationWindow.width/2 , 0, this.name, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)
        this.descriptionText = this.window.entity.scene.add.text(10, 50, this.description, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
        this.costText = this.window.entity.scene.add.text(10, 150, "Cost: " +  this.cost, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)

        this.itemInformationContainer = this.window.entity.scene.add.container(this.informationWindow.x, this.informationWindow.y, [this.nameText, this.descriptionText, this.costText]).setDepth(1003)
    }
}

export default Item