import { ThreadWorker } from "poolifier";
function yourFunction(data) {
  console.log(data);
  return { ok: 1 };
}
var worker_default = new ThreadWorker(yourFunction, {
  maxInactiveTime: 6e4
});
export {
  worker_default as default
};
