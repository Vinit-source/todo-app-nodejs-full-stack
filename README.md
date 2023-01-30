# Full-Stack Todo Application

This is a simple todo application that uses:

- HTML, CSS, JS for frontend
- NodeJS for backend
- MySQL as the database

To experiment with this code, you would require the following details:

- DB Connection details:

```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "<YOUR_PASSWORD>",
  database: "todos",
});
```

1. Create a table named `todo_list` in the `todos` database. Follow the table structure as below:

   | id  | title        | dueDate    | isEditing |
   | :-- | :----------- | :--------- | :-------- |
   | 1   | Example Todo | 2023-02-02 | null      |
   | 2   | ...          | ...        | ...       |

2. For backend, install `node` and `npm`. Open the folder in VSCode. Run `npm install` in its terminal.

3. Once all packages are installed, run `node backend.js` in the terminal.

4. Go Live with `frontend.html` file and start experimenting with the code.
