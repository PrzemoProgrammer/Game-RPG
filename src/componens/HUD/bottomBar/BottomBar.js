import SkillIcon from "./SkillIcon"

class BottomBar {
    constructor(scene, x, y, sprite) {

        this.scene = scene
        this.x = x
        this.y = y
        this.sprite = sprite

        this.sprite = this.scene.add.sprite(this.x, this.y, this.sprite).setOrigin(0, 0)
        this.fallingRock = new SkillIcon(this.scene, this.x +10, this.y +10, "falling-rock-icon")
        this.fallingRock = new SkillIcon(this.scene, this.x +70, this.y +10, "freeze-spin-icon")
    }
}

export default BottomBar