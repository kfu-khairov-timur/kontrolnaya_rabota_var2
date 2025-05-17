class ExpenseModel {
  constructor() {
    this.expenses = [...mockExpenses];
  }

  getAll() {
    return this.expenses;
  }

  add(expense) {
    expense.id = Date.now();
    this.expenses.push(expense);
  }

  delete(id) {
    this.expenses = this.expenses.filter(exp => exp.id !== id);
  }

  update(id, newData) {
    const index = this.expenses.findIndex(exp => exp.id === id);
    if (index !== -1) {
      this.expenses[index] = { ...this.expenses[index], ...newData };
    }
  }

  filterByCategory(category) {
    if (category === "Все") return this.expenses;
    return this.expenses.filter(exp => exp.category === category);
  }
}