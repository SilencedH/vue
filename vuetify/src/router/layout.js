import BaseLine from "../views/layout/BaseLine";
import Layout from "../views/layout/Layout";
import BaselineFlipped from "../views/layout/BaselineFlipped";
import Centered from "../views/layout/Centered";
import Complex from "../views/layout/Complex";
import Dark from "../views/layout/Dark";
import GoogleContacts from "../views/layout/GoogleContacts";
import GoogleKeep from "../views/layout/GoogleKeep";
import GoogleYoutuBe from "../views/layout/GoogleYoutube";

const layout = [
  {
    path: "/layout",
    name: "Layout",
    component: Layout
  },
  {
    path: "/layout/baseLine",
    name: "BaseLine",
    component: BaseLine
  },
  {
    path: "/layout/baselineFlipped",
    name: "BaselineFlipped",
    component: BaselineFlipped
  },
  {
    path: "/layout/centered",
    name: "Centered",
    component: Centered
  },
  {
    path: "/layout/complex",
    name: "Complex",
    component: Complex
  },
  {
    path: "/layout/dark",
    name: "Dark",
    component: Dark
  },
  {
    path: "/layout/googleContacts",
    name: "GoogleContacts",
    component: GoogleContacts
  },
  {
    path: "/layout/googleKeep",
    name: "GoogleKeep",
    component: GoogleKeep
  },
  {
    path: "/layout/googleYoutube",
    name: "GoogleYoutube",
    component: GoogleYoutuBe
  }
];

export default layout;
