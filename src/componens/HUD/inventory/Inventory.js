class Inventory {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite= this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)

  
        // .on('pointerdown', () => button.setScale( 1.1 )).on('pointerup', () => button.setScale( 1 ));
    }
}
export default Inventory