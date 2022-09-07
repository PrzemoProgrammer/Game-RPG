import Button from "../Button";


export default class Window {
    constructor(scene, config) {
        this.scene = scene
        this.config = config

        this.canOpen = true

        this.sprite = this.scene.add.sprite(0, 0, 'window').setOrigin(0, 0)
        this.name = this.scene.add.sprite(this.sprite.displayWidth/2, 5, config.name).setOrigin(0.5, 0)
        this.escapeButton = new Button(this.scene, 245, 15, 'closeButton').onClick(()=>{
            this.isOpen() ? this.closeWindow() : this.openWindow()
        })

        this.windowContainer = this.scene.add.container(config.x ,config.y + 10, [this.sprite, this.name, this.escapeButton]) //podać x i y kontenera npcka

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
}




















// import Button from "../Button";


// export default class Window {
//     constructor(scene, npc, config) {
//         this.scene = scene
//         this.npc = npc

//         this.canOpen = true

//         this.sprite = this.scene.add.sprite(0, 0, 'window').setOrigin(0, 0)
//         this.name = this.scene.add.sprite(this.sprite.displayWidth/2, 5, config.name).setOrigin(0.5, 0)
//         this.escapeButton = new Button(this.scene, 245, 15, 'closeButton').onClick(()=>{
//             this.isOpen() ? this.closeWindow() : this.openWindow()
//         })

//         this.windowContainer = this.scene.add.container(10 + this.x, 10 + 10, [this.sprite, this.name, this.escapeButton]) //podać x i y kontenera npcka

//         this.windowContainer.setDepth(1000)
    
//         this.windowCallbacks = null
//     }  
//     //  przekazanie x i y NPcka jak 


//     setWindowCallbacks(callbacks) {
//         this.windowCallbacks = callbacks;
//     }

//     openWindow(){
//         if(!this.canOpen) return
//         this.canOpen = false
//         this.changeWindowVisibility(true)
//         this.windowCallbacks.onWindowOpen()
//     }

//     closeWindow() {
//         this.changeWindowVisibility(false)
//         this.windowCallbacks && this.windowCallbacks.onWindowClose()
//     }

//     changeWindowVisibility(bool) {
//         this.windowContainer.setVisible(bool).setActive(bool)
//     }

//     isOpen(){
//         return this.windowContainer.visible
//     }
// }
