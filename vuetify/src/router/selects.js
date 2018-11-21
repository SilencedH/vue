import CustomTextAndValue from "../views/selects/CustomTextAndValue";
import Icons from "../views/selects/Icons";
import Light from "../views/selects/Light";
import Multiple from "../views/selects/Multiple";
import SelectionAppearance from "../views/selects/SelectionAppearance";
import Selects from "../views/selects/Selects";
import Slots from "../views/selects/Slots";
import Usage from "../views/selects/Usage";

const selects = [
  {
    component: Selects,
    name: "Selects",
    path: "/selects"
  },
  {
    component: CustomTextAndValue,
    name: "CustomTextAndValue",
    path: "/selects/customTextAndValue"
  },
  {
    component: Icons,
    name: "SelectsIcons",
    path: "/selects/icons"
  },
  {
    component: Light,
    name: "Light",
    path: "/selects/light"
  },
  {
    component: Multiple,
    name: "Multiple",
    path: "/selects/multiple"
  },
  {
    component: SelectionAppearance,
    name: "SelectionAppearance",
    path: "/selects/selectionAppearance"
  },
  {
    component: Slots,
    name: "SelectsSlots",
    path: "/selects/slots"
  },
  {
    component: Usage,
    name: "SelectsUsage",
    path: "/selects/usage"
  }
];

export default selects;
