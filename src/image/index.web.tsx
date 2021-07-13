import Native from "./native";
import Next from "./next";

const isNext = process.env.NEXT_PUBLIC_IS_NEXT;
const Web = isNext ? Next : Native;

export default Web;