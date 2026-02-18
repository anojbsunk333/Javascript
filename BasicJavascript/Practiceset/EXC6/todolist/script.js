class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.currentFilter = "all";

    // DOM Elements
    this.titleInput = document.getElementById("title");
    this.descInput = document.getElementById("desc");
    this.submitBtn = document.getElementById("submit");
    this.deleteAllBtn = document.getElementById("deleteAllBtn");
    this.taskList = document.getElementById("taskList");
    this.taskCount = document.getElementById("taskCount");
    this.filterBtns = document.querySelectorAll(".filter-btn");

    this.init();
  }

  init() {
    this.displayCurrentDate();
    this.renderTasks();
    this.setupEventListeners();
  }

  displayCurrentDate() {
    const dateElement = document.getElementById("currentDate");
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date().toLocaleDateString("en-US", options);
    dateElement.textContent = today;
  }

  setupEventListeners() {
    // Add task
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addTask();
    });

    // Delete all tasks
    this.deleteAllBtn.addEventListener("click", () => {
      this.deleteAllTasks();
    });

    // Filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.dataset.filter;
        this.renderTasks();
      });
    });

    // Enter key support
    this.titleInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.addTask();
      }
    });
  }

  addTask() {
    const title = this.titleInput.value.trim();

    if (!title) {
      this.showNotification("Please enter a task title!", "error");
      return;
    }

    const todo = {
      id: Date.now(),
      title: title,
      description: this.descInput.value.trim(),
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    this.todos.unshift(todo);
    this.saveToLocalStorage();
    this.renderTasks();
    this.clearInputs();
    this.showNotification("Task added successfully!", "success");
  }

  deleteTask(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveToLocalStorage();
    this.renderTasks();
    this.showNotification("Task deleted!", "info");
  }

  deleteAllTasks() {
    if (this.todos.length === 0) {
      this.showNotification("No tasks to delete!", "info");
      return;
    }

    if (confirm("Are you sure you want to delete all tasks?")) {
      this.todos = [];
      this.saveToLocalStorage();
      this.renderTasks();
      this.showNotification("All tasks deleted!", "info");
    }
  }

  toggleTask(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveToLocalStorage();
      this.renderTasks();
    }
  }

  editTask(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      const newTitle = prompt("Edit task title:", todo.title);
      if (newTitle !== null && newTitle.trim() !== "") {
        todo.title = newTitle.trim();

        const newDesc = prompt("Edit task description:", todo.description);
        if (newDesc !== null) {
          todo.description = newDesc.trim();
        }

        this.saveToLocalStorage();
        this.renderTasks();
        this.showNotification("Task updated!", "success");
      }
    }
  }

  getFilteredTodos() {
    switch (this.currentFilter) {
      case "active":
        return this.todos.filter((todo) => !todo.completed);
      case "completed":
        return this.todos.filter((todo) => todo.completed);
      default:
        return this.todos;
    }
  }

  renderTasks() {
    const filteredTodos = this.getFilteredTodos();

    if (filteredTodos.length === 0) {
      this.taskList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-clipboard-list"></i>
                    <p>No tasks ${this.currentFilter !== "all" ? this.currentFilter : ""} yet!</p>
                    <small>Add a new task to get started</small>
                </div>
            `;
    } else {
      this.taskList.innerHTML = filteredTodos
        .map(
          (todo) => `
                <div class="task-item ${todo.completed ? "completed" : ""}" data-id="${todo.id}">
                    <div class="task-content">
                        <div class="task-checkbox">
                            <input type="checkbox" ${todo.completed ? "checked" : ""} onchange="todoApp.toggleTask(${todo.id})">
                        </div>
                        <div class="task-details">
                            <div class="task-title">${this.escapeHtml(todo.title)}</div>
                            ${todo.description ? `<div class="task-description">${this.escapeHtml(todo.description)}</div>` : ""}
                            <div class="task-meta">
                                <span><i class="far fa-clock"></i> ${todo.createdAt}</span>
                            </div>
                        </div>
                        <div class="task-actions">
                            <button class="edit-btn" onclick="todoApp.editTask(${todo.id})">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete-btn" onclick="todoApp.deleteTask(${todo.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `,
        )
        .join("");
    }

    this.updateTaskCount();
  }

  updateTaskCount() {
    const totalTasks = this.todos.length;
    const completedTasks = this.todos.filter((todo) => todo.completed).length;
    this.taskCount.textContent = `(${completedTasks}/${totalTasks})`;
  }

  saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  clearInputs() {
    this.titleInput.value = "";
    this.descInput.value = "";
    this.titleInput.focus();
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
            <span>${message}</span>
        `;

    // Style notification
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#667eea"};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Initialize the app
const todoApp = new TodoApp();
