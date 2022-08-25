import Button from "../Button";


export default class Window {
    constructor(entity, config) {
        this.entity = entity

        this.x = config.x
        this.y = config.y
        this.w = config.w
        this.h = config.h

        this.canOpen = true

        this.sprite = this.entity.scene.add.sprite(0, 0, 'window').setOrigin(0, 0)
        this.name = this.entity.scene.add.sprite(this.sprite.displayWidth/2, 5, config.name).setOrigin(0.5, 0)
        this.escapeButton = new Button(this.entity.scene, 245, 15, 'closeButton').onClick(()=>{
            this.isOpen() ? this.closeWindow() : this.openWindow()
        })

        this.windowContainer = this.entity.scene.add.container(this.entity.characterContainer.x + this.x, this.entity.characterContainer.y + this.y, [this.sprite, this.name, this.escapeButton])

        this.windowContainer.setDepth(1000)
    
        this.windowCallbacks = null
    }


    setWindowCallbacks(callbacks) {
        this.windowCallbacks = callbacks;
    }

    openWindow(){
        if(!this.canOpen) return
        this.canOpen = false
        this.changeWindowVisibility(true)
        this.windowCallbacks.onWindowOpen()
    }

    closeWindow() {
        this.changeWindowVisibility(false)
        this.windowCallbacks && this.windowCallbacks.onWindowClose()
    }

    changeWindowVisibility(bool) {
        this.windowContainer.setVisible(bool).setActive(bool)
    }

    isOpen(){
        return this.windowContainer.visible
    }
}
