class MouseControl {
    constructor(scene){
        this.scene = scene

        this.target = new Phaser.Math.Vector2();
        this.isMove = false

        this.addEvents();
    }

    addEvents(){
        this.scene.input.on('pointerdown', pointer => {

            if(!this.scene.player.canMove) return

            this.isMove = true

            this.target.x = pointer.worldX - this.scene.player.characterContainer.body.width/2
            this.target.y = pointer.worldY - this.scene.player.characterContainer.body.height

            this.scene.physics.moveToObject(this.scene.player.characterContainer, this.target, this.scene.player.speed)

            this.scene.player.mouseMove(this.target.x)
        })
    }

    handleMovement(){
        if(!this.isMove) return

        const distance = Phaser.Math.Distance.BetweenPoints(this.scene.player.characterContainer.body, this.target);

        if(distance < 4) {
            this.scene.player.characterContainer.body.reset(this.target.x, this.target.y);
            this.scene.player.setIdle()
            this.isMove = false
        }
    }
}

export default MouseControl