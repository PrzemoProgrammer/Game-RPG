import questWindowConfig from "../../config/windows/questWindowConfig";
import Window from "./Window";
// import NPCsConfig from "../../config/NPC/index";

class QuestWindow extends Window {
    constructor(scene) {
        super(scene, questWindowConfig)

        this.backgorund = this.scene.add.sprite(-126, -137, 'blankBackgroundWindow').setOrigin(0, 0)

        this.windowContainer.add(this.backgorund);
    }
}
export default QuestWindow