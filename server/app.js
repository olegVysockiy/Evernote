require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/all", (req, res) => {
  res.json(list);
});

app.post("/api/new", (req, res) => {
  const { title } = req.body;

  if (title) {
    const newPost = {
      id: Date.now(),
      title,
      status: false,
    };

    list.push(newPost);

    return res.status(201).json(newPost);
  }

  return res.sendStatus(406);
});

app.delete('/api/:id', (req, res) => {
  const id = req.params.id;

  list.map((item, index) => { list[index].id === +id ? list.splice(index, 1) : false })
  return res.sendStatus(200)
});

app.patch('/api/:id', (req, res) => {
  const id = req.params.id;

  const selectedTodo = list.find(el => String(el.id) === id)
  selectedTodo.status = !selectedTodo.status
  return res.json(selectedTodo)
})

app.patch('/api/edit/:id', (req, res) => {
  const id = req.params.id;
  const { title } = req.body
  const selectedTodo = list.find(el => String(el.id) === id)
  selectedTodo.title = title
  res.json(title)
})


app.listen(PORT, () => {
  console.log(`Server start on port`, PORT);
});
