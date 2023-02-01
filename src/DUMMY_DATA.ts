import { Item } from "./store/cartReducer";
import deppo from "./assets/deppo-removebg-preview.png";
import zulo from "./assets/zulo-removebg-preview.png";
import galaxy from "./assets/galaxyNote-removebg-preview.png";
import garage from "./assets/garage-removebg-preview.png";
import chair from "./assets/bigchair-removebg-preview.png";
import toaster from "./assets/ToasterOven_600x600-removebg-preview.png";
import fridge from "./assets/fridge-removebg-preview.png";
import hairdrayer from "./assets/hairdrayer-removebg-preview.png";
import laptop from "./assets/laptop-removebg-preview.png";
import computer from "./assets/computer-removebg-preview.png";
export const DUMMY_DATA_ITEMS: Item[] = [
  {
    id: "1",
    title: "deppo",
    price: 150,
    quantity: 1,
    description: "one of the best's phones in the world",
    totalPrice: 0,
    image: deppo,
    category: "phone",
  },
  {
    id: "2",
    title: "Redmi",
    price: 120,
    quantity: 1,
    description: "the best Redmi in the world",
    totalPrice: 0,
    image: zulo,
    category: "phone",
  },
  {
    id: "3",
    title: "Galaxy Note 10",
    price: 450,
    quantity: 1,
    description: "The best samsung Phone in the World",
    totalPrice: 0,
    image: galaxy,
    category: "phone",
  },
  {
    id: "4",
    title: "Garage",
    price: 650,
    quantity: 1,
    description:
      "Big garage with a lot of space inside of it you can do a lot of thing with it",
    totalPrice: 0,
    image: garage,
    category: "garden",
  },
  {
    id: "5",
    title: "Chair",
    price: 75,
    quantity: 1,
    description: "A Chair that you can put at the Garden and slepp",
    totalPrice: 0,
    image: chair,
    category: "garden",
  },
  {
    id: "6",
    title: "Toaster",
    price: 35,
    quantity: 1,
    description: "Good toaster you can make toast",
    totalPrice: 0,
    image: toaster,
    category: "electricity",
  },
  {
    id: "7",
    title: "Fridge",
    price: 355,
    quantity: 1,
    description: "Good fridge with a lot of place for your food",
    totalPrice: 0,
    image: fridge,
    category: "electricity",
  },
  {
    id: "8",
    title: "Hair-Drayer",
    price: 65,
    quantity: 1,
    description:
      "One of the best Hair-Drayer's in the world he will make your hair feel good and nice and sexy",
    totalPrice: 0,
    image: hairdrayer,
    category: "electricity",
  },
  {
    id: "9",
    title: "Asus Laptop",
    price: 855,
    quantity: 1,
    description: "The best Asus Laptop",
    totalPrice: 0,
    image: laptop,
    category: "electricity",
  },
  {
    id: "10",
    title: "Computer",
    price: 1855,
    quantity: 1,
    description:
      "Good computer coming with all of the thing that you need to play ",
    totalPrice: 0,
    image: computer,
    category: "electricity",
  },
];
