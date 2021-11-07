const router = require('express').Router();
const { Note } = require('../db/models')

router.get('/all', async (req, res) => {
  if(req.session.user) {
    const allNotes = await Note.findAll({where: {userId: req.session.user.id}})
    return res.json(allNotes);
  }
  return res.sendStatus(406);
});

router.route('/new').post(async (req, res) => {
  const { title } = req.body;
  console.log('====>>>>sessionNEW', req.session.user)
  if (title) {
    const newNote = await Note.create({ title, status: false, userId: req.session.user.id });
    return res.status(201).json(newNote);
  }
  return res.sendStatus(406);
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await Note.destroy({ where: { id, userId: req.session.user.id } })
  return res.sendStatus(200)
});

router.route('/edit/:id').patch(async (req, res) => {
  const id = req.params.id;
  const { title } = req.body
  await Note.update(title, { where: { id, userId: req.session.user.id } })
  res.json(title)
})

router.route('/:id').patch(async (req, res) => {
  const id = req.params.id;
  const findNote = await Note.findOne({ where: { id, userId: req.session.user.id } })
  const selectedNote = await Note.update(!findNote.status, { where: { id } })
  return res.json(selectedNote)
})



module.exports = router
