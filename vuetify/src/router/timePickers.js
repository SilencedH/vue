import Time24hFormat from "../views/timePickers/Time24hFormat"
import TimeAllowedTimes from "../views/timePickers/TimeAllowedTimes"
import TimeColorable from "../views/timePickers/TimeColorable"
import TimeDialogAndMenu from "../views/timePickers/TimeDialogAndMenu"
import TimeLight from "../views/timePickers/TimeLight"
import TimePickers from "../views/timePickers/TimePickers"
import TimeWidth from "../views/timePickers/TimeWidth"

const timePickers = [
  {
    component: TimePickers,
    name: "TimePickers",
    path: "/timePickers"
  },
  {
    component: Time24hFormat,
    name: "Time24hFormat",
    path: "/timePickers/time24hFormat"
  },
  {
    component: TimeAllowedTimes,
    name: "TimeAllowedTimes",
    path: "/timePickers/timeAllowedTimes"
  },
  {
    component: TimeColorable,
    name: "TimeColorable",
    path: "/timePickers/timeColorable"
  },
  {
    component: TimeDialogAndMenu,
    name: "TimeDialogAndMenu",
    path: "/timePickers/timeDialogAndMenu"
  },
  {
    component: TimeLight,
    name: "TimeLight",
    path: "/timePickers/timeLight"
  },
  {
    component: TimeWidth,
    name: "TimeWidth",
    path: "/timePickers/timeWidth"
  }
];
export default timePickers;
