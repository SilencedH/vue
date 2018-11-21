import DividerList from "../views/dividers/DividerList"
import DividerListPortrait from "../views/dividers/DividerListPortrait"
import DividerPortrait from "../views/dividers/DividerPortrait"
import Dividers from "../views/dividers/Dividers"
import FullBleed from "../views/dividers/FullBleed"
import Inset from "../views/dividers/Inset"
import LightAndDark from "../views/dividers/LightAndDark"
import Subheaders from "../views/dividers/Subheaders"
import Vertical from "../views/dividers/Vertical"

const dividers = [
  {
    component: DividerList,
    name: "DividerList",
    path: "/dividers/dividerList"
  },
  {
    component: DividerListPortrait,
    name: "DividerListPortrait",
    path: "/dividers/dividerListPortrait"
  },
  {
    component: DividerPortrait,
    name: "DividerPortrait",
    path: "/dividers/dividerPortrait"
  },
  {
    component: Dividers,
    name: "Dividers",
    path: "/dividers"
  },
  {
    component: FullBleed,
    name: "FullBleed",
    path: "/dividers/fullBleed"
  },
  {
    component: Inset,
    name: "DividersInset",
    path: "/dividers/inset"
  },
  {
    component: LightAndDark,
    name: "LightAndDark",
    path: "/dividers/lightAndDark"
  },
  {
    component: Subheaders,
    name: "DividersSubheaders",
    path: "/dividers/subheaders"
  },
  {
    component: Vertical,
    name: "Vertical",
    path: "/dividers/vertical"
  }
]

export default dividers