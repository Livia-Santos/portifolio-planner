const express = require('express')

const router = express.Router()

const projects = [
  {
    title: "Portifolio website",
    skills: ['html','css', 'design','wireframing'],
    url:"https://livia-santos.github.io/"
  },
  {
    title: 'Ruby command line app',
    skills: ["Ruby", "Command Line"],
    url:"https://github.com/Livia-Santos/tic_tac_toe"
  },
  {
    title: 'Rails two-sided marketplace',
    skills: ['ruby', 'rails', 'html', 'css', 'wireframing', 'design', 'user stories'],
    url:"https://young-crag-54781.herokuapp.com/"
  },
  {
    title: 'React + Node.js + MongoDB Client project',
    skills: ['JavaScript', 'node.js', 'express', 'react', 'html', 'css', 'design'],
    url:"https://bulletin-board.now.sh/"

  },
  {
    title: 'Yanna Language course',
    skills: ['JavaScript', 'node.js', 'express', 'react', 'MongoDB', 'html', 'css', 'design', "team managment" ],
    url:"live son"
  }
]

router.get('/projects', (req,res)=> {
  res.json(projects)
})

module.exports = router
// export default router
