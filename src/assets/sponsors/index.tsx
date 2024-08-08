import Airbnb from "@/assets/sponsors/airbnb.png";
import Amazon from "@/assets/sponsors/Amazon.png";
import Ebay from "@/assets/sponsors/ebay.png";
import Uber from "@/assets/sponsors/uber.png";
import Slack from "@/assets/sponsors/slack.png";
import Walmart from "@/assets/sponsors/walmart.png";

export { Airbnb, Amazon, Ebay, Uber, Slack, Walmart };

interface Sponsor {
  id: number;
  image: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    image: Airbnb,
  },
  {
    id: 2,
    image: Amazon,
  },
  {
    id: 3,
    image: Ebay,
  },
  {
    id: 4,
    image: Uber,
  },
  {
    id: 5,
    image: Slack,
  },
  {
    id: 6,
    image: Walmart,
  },
];
