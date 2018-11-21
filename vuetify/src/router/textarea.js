import AutoGrow from "../views/textarea/AutoGrow"
import MultiLine from "../views/textarea/MultiLine"
import SignupBox from "../views/textarea/SignupBox"
import Textarea from "../views/textarea/Textarea"

const textarea = [
  {
    component: Textarea,
    name: "Textarea",
    path: "/textarea"
  },
  {
    component: AutoGrow,
    name: "AutoGrow",
    path: "/textarea/autoGrow"
  },
  {
    component: MultiLine,
    name: "MultiLine",
    path: "/textarea/multiLine"
  },
  {
    component: SignupBox,
    name: "SignupBox",
    path: "/textarea/signupBox"
  }
];

export default textarea;
