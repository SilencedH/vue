import Absolute from "../views/menus/Absolute";
import AbsoluteWithoutActivator from "../views/menus/AbsoluteWithoutActivator";
import Activator from "../views/menus/Activator";
import CustomTransition from "../views/menus/CustomTransition";
import Hover from "../views/menus/Hover";
import MenusIndex from "../views/menus/Menus";
import Menus from "../views/menus/MenusIndex";
import Popover from "../views/menus/Popover";

const menus = [
  {
    component: Menus,
    name: "Menus",
    path: "/menus"
  },
  {
    component: Absolute,
    name: "Absolute",
    path: "/menus/absolute"
  },
  {
    component: AbsoluteWithoutActivator,
    name: "AbsoluteWithoutActivator",
    path: "/menus/absoluteWithoutActivator"
  },
  {
    component: Activator,
    name: "Activator",
    path: "/menus/activator"
  },
  {
    component: CustomTransition,
    name: "MenusCustomTransition",
    path: "/menus/customTransition"
  },
  {
    component: Hover,
    name: "MenusHover",
    path: "/menus/hover"
  },
  {
    component: MenusIndex,
    name: "MenusIndex",
    path: "/menus/index"
  },
  {
    component: Popover,
    name: "Popover",
    path: "/menus/popover"
  }
];

export default menus;
