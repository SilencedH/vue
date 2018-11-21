import Advanced from "../views/timelines/Advanced";
import Alert from "../views/timelines/Alert";
import Color from "../views/timelines/Color";
import Icons from "../views/timelines/Icons";
import Slot from "../views/timelines/Slot";
import Small from "../views/timelines/Small";
import Timelines from "../views/timelines/Timelines";
import Usage from "../views/timelines/Usage";

const timelines = [
  {
    component: Timelines,
    name: "Timelines",
    path: "/timelines"
  },
  {
    component: Advanced,
    name: "TimelinesAdvanced",
    path: "/timelines/advanced"
  },
  {
    component: Alert,
    name: "Alert",
    path: "/timelines/alert"
  },
  {
    component: Color,
    name: "TimelinesColor",
    path: "/timelines/color"
  },
  {
    component: Icons,
    name: "TimelinesIcons",
    path: "/timelines/icons"
  },
  {
    component: Slot,
    name: "Slot",
    path: "/timelines/slot"
  },
  {
    component: Small,
    name: "TimelinesSmall",
    path: "/timelines/small"
  },
  {
    component: Usage,
    name: "TimelinesUsage",
    path: "/timelines/usage"
  }
];

export default timelines;
