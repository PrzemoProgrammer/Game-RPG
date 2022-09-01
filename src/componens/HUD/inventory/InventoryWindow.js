import inventoryWindowConfig from "../../../config/windows/inventoryWindowConfig"
import Window from "../../windows/Window"

class InventoryWindow extends Window {
    constructor(entity) {
        super(entity, inventoryWindowConfig)

    }

}
export default InventoryWindow
