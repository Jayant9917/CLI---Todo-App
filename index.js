const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

const program = new Command();
const filePath = path.join(__dirname, "todos.json");

// Make sure todos.json exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf8");
}

// Read existing todos
function getTodos() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Save todos to file
function setTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf8");
}

// Add a new todo
program
  .command("add <task>")
  .description("Add a new todo")
  .action((task) => {
    const todos = getTodos();
    todos.push({ task, done: false });
    setTodos(todos);
    console.log("✅ Todo added!");
  });

// Delete a todo
program
  .command("delete <index>")
  .description("Delete a todo by index")
  .action((index) => {
    const todos = getTodos();
    if (index < 0 || index >= todos.length) {
      return console.log("❌ Invalid index");
    }
    todos.splice(index, 1);
    setTodos(todos);
    console.log("🗑️ Todo deleted!");
  });

// Mark a todo as done
program
  .command("done <index>")
  .description("Mark a todo as done")
  .action((index) => {
    const todos = getTodos();
    if (index < 0 || index >= todos.length) {
      return console.log("❌ Invalid index");
    }
    todos[index].done = true;
    setTodos(todos);
    console.log("✅ Todo marked as done!");
  });

// List all todos
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = getTodos();
    if (todos.length === 0) return console.log("📭 No todos found!");

    todos.forEach((todo, i) => {
      const status = todo.done ? "✔️" : "❌";
      console.log(`${i}: [${status}] ${todo.task}`);
    });
  });

program.parse();
