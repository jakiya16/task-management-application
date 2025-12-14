// src/sockets/index.ts
export const initSockets = (io) => {
  io.on("connection", socket => {
    const userId = socket.handshake.auth.userId;
    if (userId) socket.join(userId);
  });
};
