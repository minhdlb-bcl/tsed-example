import { $log, ServerLoader } from "@tsed/common";
import cluster from "cluster";
import { cpus } from "os";
import bootstrap from "./bootstrap";

const numCPUs = cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    console.log(numCPUs);
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    bootstrap();
    console.log(`Worker ${process.pid} started`);
}
