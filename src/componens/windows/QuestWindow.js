import questWindowConfig from "../../config/windows/questWindowConfig";
import Window from "./Window";
// import NPCsConfig from "../../config/NPC/index";

class QuestWindow extends Window {
    constructor(scene) {
        super(scene, questWindowConfig)

        
        this.backgorund = this.scene.add.sprite(5, 30, 'blankBackgroundWindow').setOrigin(0, 0)

        this.windowContainer.add(this.backgorund);
    }
}
export default QuestWindow








// import questWindowConfig from "../../config/windows/questWindowConfig";
// import Window from "./Window";

// class QuestWindow extends Window {
//     constructor(scene, npc) {
//         super(scene, npc, questWindowConfig)
        
//         this.backgorund = this.entity.scene.add.sprite(5, 30, 'blankBackgroundWindow').setOrigin(0, 0)

//         this.windowContainer.add(this.backgorund);
//     }
// }
// export default QuestWindow