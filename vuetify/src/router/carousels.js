import Carousels from "../views/carousels/Carousels";
import CustomIcons from "../views/carousels/CustomIcons";
import CustomTransition from "../views/carousels/CustomTransition";
import Default from "../views/carousels/Default";
import HideControls from "../views/carousels/HideControls";
import HideDelimiters from "../views/carousels/HideDelimiters";

const carousels = [
  {
    name: "Carousels",
    path: "/carousels",
    component: Carousels
  },
  {
    name: "CustomIcons",
    path: "/carousels/customIcons",
    component: CustomIcons
  },
  {
    name: "CustomTransition",
    path: "/carousels/customTransition",
    component: CustomTransition
  },
  {
    name: "CarouselsDefault",
    path: "/carousels/default",
    component: Default
  },
  {
    name: "HideControls",
    path: "/carousels/hideControls",
    component: HideControls
  },
  {
    name: "HideDelimiters",
    path: "/carousels/hideDelimiters",
    component: HideDelimiters
  }
];

export default carousels;
