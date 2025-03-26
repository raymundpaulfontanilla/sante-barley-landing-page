import SanteCanister from "../assets/images/sante-barley-canister.png";
import SanteCapsule from "../assets/images/sante-barley-capsule.png";
import SanteCoffee from "../assets/images/sante-barley-coffee.png";
import SanteChoco from "../assets/images/sante-barley-choco-drink.png";

const products = [
  {
    id: 1,
    productName: "Sante Canister",
    productImage: SanteCanister,
    price: "2740",
  },
  {
    id: 2,
    productName: "Sante Capsule",
    productImage: SanteCapsule,
    price: "980",
  },
  {
    id: 3,
    productName: "Sante Coffee",
    productImage: SanteCoffee,
    price: "340",
  },
  {
    id: 4,
    productName: "Santer Choco",
    productImage: SanteChoco,
    price: "370",
  },
];

export const getProducts = () => products;
