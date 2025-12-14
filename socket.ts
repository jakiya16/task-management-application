// src/lib/socket.ts
export const socket = io(import.meta.env.VITE_API_URL, {
  withCredentials: true,
});
