import Button from "../Button";


export default class Window {
    constructor(scene, config) {
        this.scene = scene
        this.config = config

        this.canOpen = true

        this.sprite = this.scene.add.sprite(0, 0, 'window')
        this.name = this.scene.add.sprite(0, -162, config.name).setOrigin(0.5, 0)
        this.escapeButton = new Button(this.scene, 114, -152, 'closeButton').onClick(()=>{
            this.isOpen() ? this.closeWindow() : this.openWindow()
        })

        this.windowContainer = this.scene.add.container(config.x, config.y, [this.sprite, this.name, this.escapeButton])
        this.windowContainer.setDepth(1000)
    }


    openWindow(){
        this.changeWindowVisibility(true)
    }

    closeWindow() {
        this.changeWindowVisibility(false)
    }

    changeWindowVisibility(bool) {
        this.windowContainer.setVisible(bool).setActive(bool)
    }

    isOpen(){
        return this.windowContainer.visible
    }

    moveable(){
        this.windowContainer.setSize(this.sprite.width, this.sprite.height);
        this.windowContainer.setInteractive()
        this.scene.input.setDraggable(this.windowContainer);
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}
