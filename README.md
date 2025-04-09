# 📝 CLI Todo App

A simple Node.js command-line Todo app to add, delete, complete, and list tasks — all saved in a local `todos.json` file.

## 📦 Requirements
- Node.js (v14+)

## 🚀 Setup
 - bash
git clone https://github.com/your-username/cli-todo-app.git
cd cli-todo-app
npm install

##🛠️ Usage
node index.js <command>

## Commands

➕ add "<task>" – Add a new todo
node index.js add "Buy milk"

🗑️ delete <index> – Delete a todo by index
node index.js delete 0

✅ done <index> – Mark a todo as done
node index.js done 0

📋 list – List all todos
node index.js list

## 📂 Notes
Tasks are saved in todos.json with done: true/false.

CLI built with commander, using fs for file handling.
