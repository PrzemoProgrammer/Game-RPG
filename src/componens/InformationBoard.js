
class InformationBoard {
    constructor(scene, config) {
        this.scene = scene

        this.informationWindow = this.scene.add.sprite(0, 0, 'over-window-information').setOrigin(0, 0)
        this.nameText = this.scene.add.text(this.informationWindow.width/2 , 0, config.name, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0.5,0)
        this.descriptionText = this.scene.add.text(10, 30, config.description, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
        
        this.itemInformationContainer = this.scene.add.container(config.x, config.y, [this.informationWindow, this.nameText, this.descriptionText]).setDepth(1003)

        if(config.cost) {
            this.costText = this.scene.add.text(10, 150, "Cost: " +  config.cost, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'}).setOrigin(0,0)
            this.itemInformationContainer.add(this.costText)
        }
    }

    openBoard(){
        this.changeBoardVisibility(true)
    }

    closeBoard() {
        this.changeBoardVisibility(false)
    }

    changeBoardVisibility(bool) {
        this.itemInformationContainer.setVisible(bool).setActive(bool)
    }

    setPosition(x, y){
        this.itemInformationContainer.x = x
        this.itemInformationContainer.y = y
    }
}

export default InformationBoard