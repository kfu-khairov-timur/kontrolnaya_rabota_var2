document.addEventListener("DOMContentLoaded", () => {
  const model = new ExpenseModel();
  const view = new ExpenseView();
  new ExpensePresenter(model, view);
});