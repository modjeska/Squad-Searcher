const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/User')

//TODO: Remove session code, use JWT

router.get('/', async (req, res) => {
  req.session.reload(async (err) => {
    if (err) {
      res.status(401).json({ error: "No user is logged in."}) 
    } else {
      const { id, username } = await User.findOne({ where: { id: req.session.userId }})
      res.status(200).json({ id, username })
    }
  })
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body

  const existingUser = await User.findOne({ where: { username: username } })
  if (existingUser == null) {
    return res.status(400).json({ error: "Username is not in the db" })
  }

  const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
  if (isPasswordCorrect) {
    // Login / Create a session
    req.session.regenerate((err) => {
      if (err) next(err)

      // store user information in session, typically a user id
      req.session.userId = existingUser.id
      console.log(req.session)

      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(async (err) => {
        if (err) return next(err)
        // res.redirect('/')
        const { id, username } = await User.findOne({ where: { id: req.session.userId }})
        res.status(200).json({ id, username })
      })
    })
  } else {
    res.status(400).json({ error: "Password is not correct" })
  }
})

// CREATE a new user
router.post('/signup', async (req, res, next) => {
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const createdUser = await User.create({ username: req.body.username, passwordHash })

    // Login / Create a session
    req.session.regenerate((err) => {
      if (err) next(err)

      // store user information in session, typically a user id
      req.session.userId = createdUser.id

      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(async (err) => {
        if (err) return next(err)
        // res.redirect('/')
        const { id, username } = await User.findOne({ where: { id: req.session.userId }})
        res.status(200).json({ id, username })
      })
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/logout', async (req, res, next) => {
  if (req.session.userId) {
    req.session.destroy((err) => {
      if (err) return next(err)

      res.status(200).json({ success: "true" })
    })
  } else {
    res.status(400).json({ error: "This user is not logged in." })
  }
})

module.exports = router