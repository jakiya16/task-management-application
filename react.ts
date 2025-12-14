export const useTasks = () =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: () => api.get("/tasks").then(res => res.data),
  });
