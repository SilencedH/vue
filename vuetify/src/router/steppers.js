import AlternateError from "../views/steppers/AlternateError";
import AlternateLabels from "../views/steppers/AlternateLabels";
import AlternativeError from "../views/steppers/AlternativeError";
import Dynamic from "../views/steppers/Dynamic";
import Editable from "../views/steppers/Editable";
import Error from "../views/steppers/Error";
import Example from "../views/steppers/Example";
import Horizontal from "../views/steppers/Horizontal";
import Linear from "../views/steppers/Linear";
import NonEditable from "../views/steppers/NonEditable";
import NonLinear from "../views/steppers/NonLinear";
import Optional from "../views/steppers/Optional";
import Steppers from "../views/steppers/Steppers";
import Vertical from "../views/steppers/Vertical";
import VerticalError from "../views/steppers/VerticalError";

const steppers = [
  {
    component: Steppers,
    name: "Steppers",
    path: "/steppers"
  },
  {
    component: AlternateError,
    name: "AlternateError",
    path: "/steppers/alternateError"
  },
  {
    component: AlternateLabels,
    name: "AlternateLabels",
    path: "/steppers/alternateLabels"
  },
  {
    component: AlternativeError,
    name: "AlternativeError",
    path: "/steppers/alternativeError"
  },
  {
    component: Dynamic,
    name: "Dynamic",
    path: "/steppers/dynamic"
  },
  {
    component: Editable,
    name: "Editable",
    path: "/steppers/editable"
  },
  {
    component: Error,
    name: "Error",
    path: "/steppers/error"
  },
  {
    component: Example,
    name: "SteppersExample",
    path: "/steppers/example"
  },
  {
    component: Horizontal,
    name: "SteppersHorizontal",
    path: "/steppers/horizontal"
  },
  {
    component: Linear,
    name: "Linear",
    path: "/steppers/linear"
  },
  {
    component: NonEditable,
    name: "NonEditable",
    path: "/steppers/nonEditable"
  },
  {
    component: NonLinear,
    name: "NonLinear",
    path: "/steppers/nonLinear"
  },
  {
    component: Optional,
    name: "Optional",
    path: "/steppers/optional"
  },
  {
    component: Vertical,
    name: "SteppersVertical",
    path: "/steppers/vertical"
  },
  {
    component: VerticalError,
    name: "VerticalError",
    path: "/steppers/verticalError"
  }
];

export default steppers;
