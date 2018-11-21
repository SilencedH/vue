import Scrolling from "../views/scrolling/Scrolling"
import Default from "../views/scrolling/Default"
import Options from "../views/scrolling/Options"
import Usage from "../views/scrolling/Usage"

const scrolling = [
  {
    path: "/scrolling",
    name: "Scrolling",
    component: Scrolling
  },
  {
    path: "/scrolling/default",
    name: "ScrollingDefault",
    component: Default
  },
  {
    path: "/scrolling/options",
    name: "Options",
    component: Options
  },
  {
    path: "/scrolling/usage",
    name: "Usage",
    component: Usage
  }
]
export default scrolling