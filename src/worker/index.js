import dayjs from "dayjs";
import { sub } from "./sub.js";
const add = ({ a, b }) => {
  console.log(sub(a, b));
  return a + b;
};
console.log(dayjs().format("DD/MM/YYYY"));
console.log(add({ a: 8, b: 5 }));
var worker_default = add;
export {
  worker_default as default
};
