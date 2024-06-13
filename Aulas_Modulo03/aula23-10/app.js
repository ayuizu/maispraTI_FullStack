class Task {
  constructor(year, month, day, type, description, valor) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.type = type;
    this.description = description;
    this.valor = valor;
  }

  validateData() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === "") {
        return false;
      }
    }
    return true;
  }
}

class Database {
  constructor() {
    const id = localStorage.getItem("id");

    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }
  loadTasks() {
    const tasks = Array();

    const id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      const task = JSON.parse(localStorage.getItem(i));

      if (task === null) {
        continue;
      }

      task.id = i;
      tasks.push(task);
    }
    return tasks;
  }

  getTasks() {
    const tasks = Array();

    const id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      const task = JSON.parse(localStorage.getItem(i));

      if (task === null) {
        continue;
      }

      task.id = i;
      tasks.push(task);
    }
    return tasks;
  }

  createTask(task) {
    const id = getNextId();
    localStorage.setItem(id, JSON.stringify(task));
    localStorage.setItem("id", id);
  }

  removeTask(id) {
    localStorage.removeItem(id);
  }

  searchTask(task) {
    let filteredTasks = Array();
    //Testas se se os campos são iguais ao campo da pesquisa. Se sim, vai retornar
    filteredTasks = this.loadTasks();
    if (task.year != "") {
      filteredTasks = filteredTasks.filter((t) => t.year === task.year);
    }
    if (task.month != "") {
      filteredTasks = filteredTasks.filter((t) => t.month === task.month);
    }
    if (task.day != "") {
      filteredTasks = filteredTasks.filter((t) => t.day === task.day);
    }
    if (task.type != "") {
      filteredTasks = filteredTasks.filter((t) => t.type === task.type);
    }
    if (task.description != "") {
      filteredTasks = filteredTasks.filter(
        (t) => t.description === task.description
      );
    }
    if (task.valor != "") {
      filteredTasks = filteredTasks.filter((t) => t.valor === task.valor);
    }
    return filteredTasks;
  }
}

/*
find retorna o primeiro elemento do array que satisfaz a condição fornecida;
filter retorna um novo array contendo todos os elementos que satisfazem a condição fornecida;
*/

const database = new Database();

function getNextId() {
  const nextId = localStorage.getItem("id");
  return parseInt(nextId) + 1;
}

function registerTask() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const valor = document.getElementById("valor").value;

  const task = new Task(year, month, day, type, description, valor);

  if (task.validateData()) {
    database.createTask(task);
  }
}

function loadTasks(tasks = Array()) {
  if (tasks.length === 0) {
    tasks = database.loadTasks();
  }
  //   const tasks = database.getTasks();

  const listTasks = document.getElementById("listTasks");
  listTasks.innerHTML = "";

  tasks.forEach((t) => {
    const row = listTasks.insertRow();

    row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`;
    switch (t.type) {
      case "1":
        t.type = "Studies";
        break;
      case "2":
        t.type = "Work";
        break;
      case "3":
        t.type = "Home";
        break;
      case "4":
        t.type = "health";
        break;
      case "5":
        t.type = "Family";
        break;
      case "6":
        t.type = "Other";
        break;
    }

    row.insertCell(1).innerHTML = t.type;
    row.insertCell(2).innerHTML = t.description;
    row.insertCell(3).innerHTML = "R$ " + t.valor;

    const btn = document.createElement("button");

    btn.className = "btn btn-danger";
    btn.id = t.id;
    btn.innerHTML = "Delete";
    btn.onclick = () => {
      const id = t.id;
      database.removeTask(id);

      window.location.reload();
    };
    row.insertCell(4).append(btn);
  });
}

function searchTasks() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const valor = document.getElementById("valor").value;

  const task = new Task(year, month, day, type, description, valor);

  const tasks = database.searchTask(task);

  loadTasks(tasks);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.contains(document.getElementById("listTasks"))) {
    loadTasks();
  }
});
