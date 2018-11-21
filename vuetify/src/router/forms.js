import BasicValidation from "../views/forms/BasicValidation";
import Forms from "../views/forms/Forms";
import SubmitAndClear from "../views/forms/SubmitAndClear";
import ValidationWithSubmitAndClear from "../views/forms/ValidationWithSubmitAndClear";
import VeeValidate from "../views/forms/VeeValidate";
import Vuelidate from "../views/forms/Vuelidate";

const froms = [
  {
    component: BasicValidation,
    name: "BasicValidation",
    path: "/forms/basicValidation"
  },
  {
    component: Forms,
    name: "Forms",
    path: "/forms"
  },
  {
    component: SubmitAndClear,
    name: "SubmitAndClear",
    path: "/forms/submitAndClear"
  },
  {
    component: ValidationWithSubmitAndClear,
    name: "ValidationWithSubmitAndClear",
    path: "/forms/validationWithSubmitAndClear"
  },
  {
    component: VeeValidate,
    name: "VeeValidate",
    path: "/forms/veeValidate"
  },
  {
    component: Vuelidate,
    name: "Vuelidate",
    path: "/forms/vuelidate"
  }
];
export default froms