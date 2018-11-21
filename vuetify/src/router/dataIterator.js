import DataIterator from "../views/dataIterator/DataIterator"
import Simple from "../views/dataIterator/Simple"
import Slots from "../views/dataIterator/Slots"

const dataIterator = [
  {
    name: "DataIterator",
    path: "/dataIterator",
    component: DataIterator
  },
  {
    name: "Simple",
    path: "/dataIterator/simple",
    component: Simple
  },
  {
    name: "Slots",
    path: "/dataIterator/slots",
    component: Slots
  }
]

export default dataIterator