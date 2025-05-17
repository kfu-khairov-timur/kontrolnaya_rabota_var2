class ExpenseView {
  constructor() {
    this.list = document.getElementById("expense-list");
  }

  render(expenses, onDelete, onEdit) {
    this.list.innerHTML = "";

    expenses.forEach(exp => {
      const li = document.createElement("li");
      li.className = "task";

      const span = document.createElement("span");
      span.innerHTML = `<strong>${exp.title}</strong> — ${exp.amount}₽ (${exp.category})`;

      const editBtn = document.createElement("button");
      editBtn.textContent = "✎";
      editBtn.className = "edit-btn";
      editBtn.onclick = () => onEdit(exp.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✖";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => onDelete(exp.id);

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      this.list.appendChild(li);
    });
  }

  getFormData() {
    return {
      title: document.getElementById("expense-title").value.trim(),
      amount: Number(document.getElementById("expense-amount").value),
      category: document.getElementById("expense-category").value,
    };
  }

  clearForm() {
    document.getElementById("expense-title").value = "";
    document.getElementById("expense-amount").value = "";
  }
}