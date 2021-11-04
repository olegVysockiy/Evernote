const router = require('express').Router();

router.get("/api/all", (req, res) => {
  res.json(list);
});

router.route("/api/new").post(async (req, res) => {
  const { title } = req.body;

  if (title) {
    const newPost = await {
      id: Date.now(),
      title,
      status: false,
    };

    list.push(newPost);

    return res.status(201).json(newPost);
  }

  return res.sendStatus(406);
});

// app.delete('/api/:id', (req, res) => {
//   const id = req.params.id;

//   list.map((item, index) => { list[index].id === +id ? list.splice(index, 1) : false })
//   return res.sendStatus(200)
// });

// app.patch('/api/:id', (req, res) => {
//   const id = req.params.id;

//   const selectedTodo = list.find(el => String(el.id) === id)
//   selectedTodo.status = !selectedTodo.status
//   return res.json(selectedTodo)
// })

// app.patch('/api/edit/:id', (req, res) => {
//   const id = req.params.id;
//   const { title } = req.body
//   const selectedTodo = list.find(el => String(el.id) === id)
//   selectedTodo.title = title
//   res.json(title)
// })

module.exports = router
