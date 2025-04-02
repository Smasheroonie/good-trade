import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSlider = [
  {
    title: "Coffee Shop",
    image: require("@/assets/images/coffee-shop.jpg"),
    description:
      "A beautiful coffee shop with ethically sourced speciality coffee!",
  },
  {
    title: "Coffee Shop",
    image: require("@/assets/images/coffee-shop.jpg"),
    description:
      "A beautiful coffee shop with ethically sourced speciality coffee!",
  },
  {
    title: "Coffee Shop",
    image: require("@/assets/images/coffee-shop.jpg"),
    description:
      "A beautiful coffee shop with ethically sourced speciality coffee!",
  },
  {
    title: "Coffee Shop",
    image: require("@/assets/images/coffee-shop.jpg"),
    description:
      "A beautiful coffee shop with ethically sourced speciality coffee!",
  },
];
