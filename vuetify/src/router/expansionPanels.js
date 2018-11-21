import Accordion from "../views/expansionPanels/Accordion";
import CustomIcons from "../views/expansionPanels/CustomIcons";
import DisabledAndReadonly from "../views/expansionPanels/DisabledAndReadonly";
import Expand from "../views/expansionPanels/Expand";
import ExpansionPanels from "../views/expansionPanels/ExpansionPanels";
import External from "../views/expansionPanels/External";
import Focusable from "../views/expansionPanels/Focusable";
import Popout from "../views/expansionPanels/Popout";

const expansionPanels = [
  {
    component: Accordion,
    name: "Accordion",
    path: "/expansionPanels/accordion"
  },
  {
    component: CustomIcons,
    name: "ExpansionPanelsCustomIcons",
    path: "/expansionPanels/customIcons"
  },
  {
    component: DisabledAndReadonly,
    name: "DisabledAndReadonly",
    path: "/expansionPanels/disabledAndReadonly"
  },
  {
    component: Expand,
    name: "ExpansionPanelsExpand",
    path: "/expansionPanels/expand"
  },
  {
    component: ExpansionPanels,
    name: "ExpansionPanels",
    path: "/expansionPanels"
  },
  {
    component: External,
    name: "External",
    path: "/expansionPanels/external"
  },
  {
    component: Focusable,
    name: "Focusable",
    path: "/expansionPanels/focusable"
  },
  {
    component: Popout,
    name: "Popout",
    path: "/expansionPanels/popout"
  }
];
export default expansionPanels;
