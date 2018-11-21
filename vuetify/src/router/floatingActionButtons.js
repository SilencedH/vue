import FloatingActionButtons from "../views/floatingActionButtons/FloatingActionButtons"
import DisplayAnimation from "../views/floatingActionButtons/DisplayAnimation"
import LateralScreens from "../views/floatingActionButtons/LateralScreens"
import PromotedAction from "../views/floatingActionButtons/PromotedAction"
import Small from "../views/floatingActionButtons/Small"
import SpeedDial from "../views/floatingActionButtons/SpeedDial"

const floatingActionButtons = [
  {
    name: "FloatingActionButtons",
    path: "/floatingActionButtons",
    component: FloatingActionButtons
  },
  {
    name: "DisplayAnimation",
    path: "/floatingActionButtons/displayAnimation",
    component: DisplayAnimation
  },
  {
    name: "LateralScreens",
    path: "/floatingActionButtons/lateralScreens",
    component: LateralScreens
  },
  {
    name: "PromotedAction",
    path: "/floatingActionButtons/promotedAction",
    component: PromotedAction
  },
  {
    name: "Small",
    path: "/floatingActionButtons/small",
    component: Small
  },
  {
    name: "SpeedDial",
    path: "/floatingActionButtons/speedDial",
    component: SpeedDial
  }
]

export default floatingActionButtons