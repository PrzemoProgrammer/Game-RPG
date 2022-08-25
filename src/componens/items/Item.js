class Item {
    constructor(scene, config) {
        this.scene = scene;
        this.config = config

        this.item = this.scene.add.sprite(config.x, config.y, config.sprite).setOrigin(0, 0)
    }
}

export default Item