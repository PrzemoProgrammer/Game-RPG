class Ability {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite = this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)
    }
}
export default Ability