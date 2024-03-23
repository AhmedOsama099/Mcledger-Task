import { worker } from "./dev-server";

if (process.env.NODE_ENV === "development") {
  console.log(worker);
  worker.start();
}

export {};
