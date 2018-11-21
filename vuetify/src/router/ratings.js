import Advanced from "../views/ratings/Advanced";
import Card from "../views/ratings/Card";
import Default from "../views/ratings/Default";
import Increments from "../views/ratings/Increments";
import Length from "../views/ratings/Length";
import Ratings from "../views/ratings/Ratings";
import Sizes from "../views/ratings/Sizes";
import Slots from "../views/ratings/Slots";

const ratings = [
  {
    component: Ratings,
    name: "Ratings",
    path: "/ratings"
  },
  {
    component: Advanced,
    name: "RatingsAdvanced",
    path: "/ratings/advanced"
  },
  {
    component: Card,
    name: "Card",
    path: "/ratings/card"
  },
  {
    component: Default,
    name: "RatingsDefault",
    path: "/ratings/default"
  },
  {
    component: Increments,
    name: "Increments",
    path: "/ratings/increments"
  },
  {
    component: Length,
    name: "Length",
    path: "/ratings/length"
  },
  {
    component: Sizes,
    name: "Sizes",
    path: "/ratings/sizes"
  },
  {
    component: Slots,
    name: "RatingsSlots",
    path: "/ratings/slots"
  }
];

export default ratings;
