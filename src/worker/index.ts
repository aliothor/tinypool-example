import dayjs from "dayjs"
import { sub } from './sub.js'
import { log } from "console";

const add = ({ a, b }: { a: number, b: number }) => {
    console.log(sub(a, b));
    return a + b
}

console.log(dayjs().format('DD/MM/YYYY'));

console.log(add({ a: 8, b: 5 }));


export default add