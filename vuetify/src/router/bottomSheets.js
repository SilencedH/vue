import BottomSheets from "../views/bottomSheets/BottomSheets"
import Inset from "../views/bottomSheets/Inset"
import Standard from "../views/bottomSheets/Standard"

const bottomSheets = [
  {
    path: "/bottomSheets",
    name: "BottomSheets",
    component: BottomSheets
  },
  {
    path: "/bottomSheets/inset",
    name: "Inset",
    component: Inset
  },
  {
    path: "/bottomSheets/standard",
    name: "BottomStandard",
    component: Standard
  }
]
export default bottomSheets