useEffect(() => {
  socket.on("task:update", () => queryClient.invalidateQueries(["tasks"]));
}, []);
