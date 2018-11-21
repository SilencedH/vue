import Color from "../views/jumbotrons/Color";
import Gradient from "../views/jumbotrons/Gradient";
import GradientWithImage from "../views/jumbotrons/GradientWithImage";
import Jumbotrons from "../views/jumbotrons/Jumbotrons";
import Usage from "../views/jumbotrons/Usage";

const jumbotrons = [
  {
    component: Color,
    path: "/jumbotrons/color",
    name: "JumbotronsColor"
  },
  {
    component: Gradient,
    path: "/jumbotrons/gradient",
    name: "Grandient"
  },
  {
    component: GradientWithImage,
    path: "/jumbotrons/gradientWithImage",
    name: "GradientWithImage"
  },
  {
    component: Jumbotrons,
    path: "/jumbotrons",
    name: "Jumbotrons"
  },
  {
    component: Usage,
    path: "/jumbotrons/usage",
    name: "JumbotronsUsage"
  }
];

export default jumbotrons
