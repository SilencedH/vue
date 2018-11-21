import Chips from "../views/chips/Chips";
import Closable from "../views/chips/Closable";
import Colored from "../views/chips/Colored";
import Default from "../views/chips/Default";
import Icon from "../views/chips/Icon";
import InSelects from "../views/chips/InSelects";
import Label from "../views/chips/Label";
import Outline from "../views/chips/Outline";

const chips = [
  {
    name: "Chips",
    path: "/chips",
    component: Chips
  },
  {
    name: "ChipsClosable",
    path: "/chips/closable",
    component: Closable
  },
  {
    name: "ChipsColored",
    path: "/chips/colored",
    component: Colored
  },
  {
    name: "ChipsDefault",
    path: "/chips/default",
    component: Default
  },
  {
    name: "ChipsIcon",
    path: "/chips/icon",
    component: Icon
  },
  {
    name: "InSelects",
    path: "/chips/inSelects",
    component: InSelects
  },
  {
    name: "Label",
    path: "/chips/label",
    component: Label
  },
  {
    name: "ChipsOutline",
    path: "/chips/outline",
    component: Outline
  }
];
export default chips;
