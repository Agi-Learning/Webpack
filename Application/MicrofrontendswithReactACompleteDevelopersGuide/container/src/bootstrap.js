import { mount as cartMount } from "cart/Cartshow";
import { mount as productsMount } from "products/ProductsIndex";
console.log("Container!Hey Cortana, yeah, see, see. OK, Set alarm");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
