import Advanced from "../views/dialogs/Advanced";
import Dialogs from "../views/dialogs/Dialogs";
import Form from "../views/dialogs/Form";
import FullScreen from "../views/dialogs/FullScreen";
import Loader from "../views/dialogs/Loader";
import Modal from "../views/dialogs/Modal";
import OverFlowed from "../views/dialogs/OverFlowed";
import Scrollable from "../views/dialogs/Scrollable";
import Simple from "../views/dialogs/Simple";
import WithoutActivator from "../views/dialogs/WithoutActivator";

const dialogs = [
  {
    component: Advanced,
    name: "DialogsAdvanced",
    path: "/dialogs/advanced"
  },
  {
    component: Dialogs,
    name: "Dialogs",
    path: "/dialogs"
  },
  {
    component: Form,
    name: "Form",
    path: "/dialogs/form"
  },
  {
    component: FullScreen,
    name: "FullScreen",
    path: "/dialogs/fullScreen"
  },
  {
    component: Loader,
    name: "Loader",
    path: "/dialogs/loader"
  },
  {
    component: Modal,
    name: "Modal",
    path: "/dialogs/modal"
  },
  {
    component: OverFlowed,
    name: "OverFlowed",
    path: "/dialogs/overFlowed"
  },
  {
    component: Scrollable,
    name: "Scrollable",
    path: "/dialogs/scrollable"
  },
  {
    component: Simple,
    name: "DialogsSimple",
    path: "/dialogs/simple"
  },
  {
    component: WithoutActivator,
    name: "WithoutActivator",
    path: "/dialogs/withoutActivator"
  }
];

export default dialogs;
