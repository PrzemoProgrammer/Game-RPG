class FreezeSpin {
    constructor(scene, x, y, icestormImg, iceImg) {
        this.scene = scene
        this.x = x
        this.y = y
        this.icestormImg = icestormImg
        this.iceImg = iceImg

        this.ice = this.scene.add.sprite(this.x +35, this.y +80, this.iceImg)
        this.icestorm = this.scene.add.sprite(this.x +40, this.y + 40, this.icestormImg)

        this.freezeSpinContainer = scene.add.container(this.x -400, this.y -350, [this.ice, this.icestorm])

        this.icestorm.play(this.icestormImg, true)
        this.ice.play(this.iceImg, true)
    }

    update(){

    }

    active(){
        this.icestorm.play(this.icestormImg, true)
        this.ice.play(this.iceImg, true)
    }

    setPosition(x, y){
        this.freezeSpinContainer.setPosition(x , y )
    }
    //? ustawić tą animacje lodu w dobrym setPosition 
}
export default FreezeSpin