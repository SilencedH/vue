import BreadCrumbs from "../views/breadcrumbs/BreadCrumbs"
import IconDividers from "../views/breadcrumbs/IconDividers"
import ItemSlot from "../views/breadcrumbs/ItemSlot"
import TextDividers from "../views/breadcrumbs/TextDividers"

const breadcrumbs = [
  {
    path: "/breadCrumbs",
    name: "BreadCrumbs",
    component: BreadCrumbs
  },
  {
    path: "/breadCrumbs/iconDividers",
    name: "IconDividers",
    component: IconDividers
  },
  {
    path: "/breadCrumbs/ItemSlot",
    name: "ItemSlot",
    component: ItemSlot
  },
  {
    path: "/breadCrumbs/TextDividers",
    name: "TextDividers",
    component: TextDividers
  }
]

export default breadcrumbs