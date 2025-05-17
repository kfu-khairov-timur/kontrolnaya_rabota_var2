class ExpensePresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.render();

    document.getElementById("add-expense-btn").onclick = () => {
      const data = this.view.getFormData();
      if (!data.title || !data.amount) return;
      this.model.add(data);
      this.view.clearForm();
      this.render();
    };

    document.getElementById("filter-category").onchange = () => {
      this.render();
    };
  }

  render() {
    const category = document.getElementById("filter-category").value;
    const filtered = this.model.filterByCategory(category);
    this.view.render(filtered, this.handleDelete.bind(this), this.handleEdit.bind(this));
  }

  handleDelete(id) {
    this.model.delete(id);
    this.render();
  }

  handleEdit(id) {
    const item = this.model.getAll().find(e => e.id === id);
    const newTitle = prompt("Новое название", item.title);
    const newAmount = prompt("Новая сумма", item.amount);
    const newCategory = prompt("Новая категория", item.category);
    if (newTitle && newAmount && newCategory) {
      this.model.update(id, { title: newTitle, amount: +newAmount, category: newCategory });
      this.render();
    }
  }
}