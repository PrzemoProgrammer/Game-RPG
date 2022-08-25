import questWindowConfig from "../../config/windows/questWindowConfig";
import Window from "./Window";

class QuestWindow extends Window {
    constructor(entity) {
        super(entity, questWindowConfig)
        
        this.backgorund = this.entity.scene.add.sprite(5, 30, 'blankBackgroundWindow').setOrigin(0, 0)

        this.windowContainer.add(this.backgorund);
    }
}
export default QuestWindow