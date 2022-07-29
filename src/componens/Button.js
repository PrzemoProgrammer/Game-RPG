class Button {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite = this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)

        this.sprite.setInteractive()
        // .on('pointerdown', () => button.setScale( 1.1 )).on('pointerup', () => button.setScale( 1 ));
    }
}
export default Button