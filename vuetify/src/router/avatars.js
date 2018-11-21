import Avatars from "../views/avatars/Avatars"
import Advanced from "../views/avatars/Advanced"
import IconAndText from "../views/avatars/IconAndText"
import Standard from "../views/avatars/Standard"

const avatars = [
  {
    path: "/avatars",
    name: "Avatars",
    component: Avatars
  },
  {
    path: "/avatars/advanced",
    name: "Advanced",
    component: Advanced
  },
  {
    path: "/avatars/iconAndText",
    name: "IconAndText",
    component: IconAndText
  },
  {
    path: "/avatars/standard",
    name: "Standard",
    component: Standard
  }
]
export default avatars
