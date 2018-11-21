import BottomNavigation from "../views/bottomNavigation/BottomNavigation"
import ColorAndShift from "../views/bottomNavigation/ColorAndShift"
import IconsAndText from "../views/bottomNavigation/IconsAndText"
import Toggle from "../views/bottomNavigation/Toggle"

const bottomNavigation = [
  {
    path: "/bottomNavigation",
    name: "BottomNavigation",
    component: BottomNavigation
  },
  {
    path: "/bottomNavigation/colorAndShift",
    name: "ColorAndShift",
    component: ColorAndShift
  },
  {
    path: "/bottomNavigation/iconsAndText",
    name: "IconsAndText",
    component: IconsAndText
  },
  {
    path: "/bottomNavigation/toggle",
    name: "Toggle",
    component: Toggle
  }
]

export default bottomNavigation