// src/server.ts
import http from "http";
import { Server } from "socket.io";
import { app } from "./app";
import { initSockets } from "./sockets";

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

initSockets(io);

server.listen(4000, () => console.log("API running on :4000"));
