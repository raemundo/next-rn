import Native from "./native";
import Next from "./next";

const isNext = false;
const Web = isNext ? Next : Native;

export default Web;