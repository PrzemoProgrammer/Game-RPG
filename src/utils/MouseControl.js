class MouseControl {
    constructor(scene){
        this.scene = scene

        this.target = new Phaser.Math.Vector2();
        this.isMove = false

        this.addEvents();
    }

    addEvents(){
        this.scene.input.on('pointerdown', pointer => {
            this.isMove = true

            this.target.x = pointer.worldX
            this.target.y = pointer.worldY

            this.scene.physics.moveToObject(this.scene.player.characterContainer, this.target, this.scene.player.speed)

            this.scene.player.mouseMove(this.target.x)
        })
    }

    handleMovement(){
        if(!this.isMove) return

        const distance = Phaser.Math.Distance.Between(this.scene.player.characterContainer.body.x, this.scene.player.characterContainer.body.y, this.target.x, this.target.y);

        if(distance < 4) {
            this.scene.player.characterContainer.body.reset(this.target.x, this.target.y);
            this.scene.player.setIdle()
            this.isMove = false
        }
    }
}

export default MouseControl