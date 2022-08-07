class SkillIcon {
    constructor(scene, x, y, image) {

        this.scene = scene
        this.x = x
        this.y = y
        this.image = image

        this.icon = this.scene.add.image(this.x, this.y, this.image).setOrigin(0, 0)
        this.load = this.scene.add.image(this.x, this.y, 'load-skill-image').setOrigin(0, 0)

        this.load.displayHeight = 0
    }
}
export default SkillIcon