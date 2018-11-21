import Alignment from "../views/tooltips/Alignment"
import Default from "../views/tooltips/Default"
import Tooltips from "../views/tooltips/Tooltips"
import Visibility from "../views/tooltips/Visibility"

const tooltips = [
  {
    component: Tooltips,
    name: "Tooltips",
    path: "/tooltips"
  },
  {
    component: Alignment,
    name: "Alignment",
    path: "/tooltips/alignment"
  },
  {
    component: Default,
    name: "TooltipsDefault",
    path: "/tooltips/default"
  },
  {
    component: Visibility,
    name: "TooltipsVisibility",
    path: "/tooltips/visibility"
  }
];

export default tooltips;
