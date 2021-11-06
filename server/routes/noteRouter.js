const router = require('express').Router();
const { Note } = require('../db/models')

router.get('/all', async (req, res) => {
  const allNotes = await Note.findAll()
  res.json(allNotes);
});

router.route('/new').post( async (req, res) => {
  const { title } = req.body;

  if (title) {
    const newNote = await Note.create({
      title,
      status: false,
    });
    return res.status(201).json(newNote);
  }
  return res.sendStatus(406);
});

router.route('/:id').delete( async (req, res) => {
  await Note.destroy({where: {id: req.params.id} })
  return res.sendStatus(200)
});

router.route('/edit/:id').patch(async (req, res) => {
  const id = req.params.id;
  const { title } = req.body
  const selectedNote = await Note.update(title, {where: {id: req.params.id}})
  res.json(title)
})

router.route('/:id').patch( async (req, res) => {
  const id = req.params.id;
  const findNote = await Note.findOne({where: {id: req.params.id} })
  const selectedNote = await Note.update(!findNote.status, {where: {id: req.params.id}})
  return res.json(selectedNote)
})



module.exports = router
