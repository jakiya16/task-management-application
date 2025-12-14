export class TaskService {
  constructor(private repo, private io) {}

  async update(id, data) {
    const task = await this.repo.update(id, data);
    this.io.emit("task:update", task);

    if (data.assignedToId) {
      this.io.to(data.assignedToId).emit("task:assigned", task);
    }

    return task;
  }
}
