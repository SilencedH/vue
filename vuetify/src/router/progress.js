import CircularColored from "../views/progress/CircularColored";
import CircularDefault from "../views/progress/CircularDefault";
import CircularIndeterminate from "../views/progress/CircularIndeterminate";
import CircularRotate from "../views/progress/CircularRotate";
import CircularSizeAndWidth from "../views/progress/CircularSizeAndWidth";
import LinearBuffer from "../views/progress/LinearBuffer";
import LinearCustomColors from "../views/progress/LinearCustomColors";
import LinearCustomHeightAndContextualColors from "../views/progress/LinearCustomHeightAndContextualColors";
import LinearDeterminate from "../views/progress/LinearDeterminate";
import LinearIndeterminate from "../views/progress/LinearIndeterminate";
import LinearQueryIndeterminateAndDeterminate from "../views/progress/LinearQueryIndeterminateAndDeterminate";
import Progress from "../views/progress/Progress";

const progress = [
  {
    component: Progress,
    name: "Progress",
    path: "/progress"
  },
  {
    component: CircularColored,
    name: "CircularColored",
    path: "/progress/circularColored"
  },
  {
    component: CircularDefault,
    name: "CircularDefault",
    path: "/progress/circularDefault"
  },
  {
    component: CircularIndeterminate,
    name: "CircularIndeterminate",
    path: "/progress/circularIndeterminate"
  },
  {
    component: CircularRotate,
    name: "CircularRotate",
    path: "/progress/circularRotate"
  },
  {
    component: CircularSizeAndWidth,
    name: "CircularSizeAndWidth",
    path: "/progress/circularSizeAndWidth"
  },
  {
    component: LinearBuffer,
    name: "LinearBuffer",
    path: "/progress/linearBuffer"
  },
  {
    component: LinearCustomColors,
    name: "LinearCustomColors",
    path: "/progress/linearCustomColors"
  },
  {
    component: LinearCustomHeightAndContextualColors,
    name: "LinearCustomHeightAndContextualColors",
    path: "/progress/linearCustomHeightAndContextualColors"
  },
  {
    component: LinearDeterminate,
    name: "LinearDeterminate",
    path: "/progress/linearDeterminate"
  },
  {
    component: LinearIndeterminate,
    name: "LinearIndeterminate",
    path: "/progress/linearIndeterminate"
  },
  {
    component: LinearQueryIndeterminateAndDeterminate,
    name: "LinearQueryIndeterminateAndDeterminate",
    path: "/progress/linearQueryIndeterminateAndDeterminate"
  }
];
export default progress;
