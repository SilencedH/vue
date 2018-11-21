import CustomOrigin from "../views/transitions/CustomOrigin"
import FadeTransition from "../views/transitions/FadeTransition"
import ScaleTransition from "../views/transitions/ScaleTransition"
import SlideXTransition from "../views/transitions/SlideXTransitions"
import SlideYTransitions from "../views/transitions/SlideYTransitions"
import Todo from "../views/transitions/Todo"
import Transitions from "../views/transitions/Transitions"

const transitions = [
  {
    component: Transitions,
    name: 'Transitions',
    path: '/transitions'
  },
  {
    component: CustomOrigin,
    name: 'CustomOrigin',
    path: '/transitions/customOrigin'
  },
  {
    component: FadeTransition,
    name: "FadeTransition",
    path: "/transitions/fadeTransition"
  },
  {
    component: ScaleTransition,
    name: "ScaleTransition",
    path: "/transitions/scaleTransition"
  },
  {
    component: SlideXTransition,
    name: 'SlideXTransition',
    path: '/transitions/slideXTransition'
  },
  {
    component: SlideYTransitions,
    name: "SlideYTransitions",
    path: "/transitions/slideYTransitions"
  },
  {
    component: Todo,
    name: "Todo",
    path: "/transitions/todo"
  }
]

export default transitions