import Colors from "../views/colors/Colors"
import Classes from "../views/colors/Classes"
import ColorPack from "../views/colors/ColorPack"
import TextClasses from "../views/colors/TextClasses"

const colors = [
  {
    name: "Colors",
    path: "/colors",
    component: Colors
  },
  {
    name: "Classes",
    path: "/colors/classes",
    component: Classes
  },
  {
    name: "ColorPack",
    path: "/colors/colorPack",
    component: ColorPack
  },
  {
    name: "TextClasses",
    path: "/colors/textClasses",
    component: TextClasses
  }
]

export default colors