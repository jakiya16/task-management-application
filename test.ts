it("emits socket event on assignment", async () => {
  const emit = jest.fn();
  const io = { emit, to: () => ({ emit }) };

  await service.update("1", { assignedToId: "2" });
  expect(emit).toHaveBeenCalled();
});
