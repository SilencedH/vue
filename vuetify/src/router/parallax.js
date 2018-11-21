import Parallax from "../views/parallax/Parallax";
import Content from "../views/parallax/Content";
import CustomHeight from "../views/parallax/CustomHeight";
import Default from "../views/parallax/Default";

const parallax = [
  {
    component: Parallax,
    name: "Parallax",
    path: "/parallax"
  },
  {
    component: Content,
    name: "Content",
    path: "/parallax/content"
  },
  {
    component: CustomHeight,
    name: "CustomHeight",
    path: "/parallax/customHeight"
  },
  {
    component: Default,
    name: "ParallaxDefault",
    path: "/parallax/default"
  }
];

export default parallax;
