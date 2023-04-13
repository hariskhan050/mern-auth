const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

//@access private
//route GET /api/goals
const getGoals = asyncHandler(
  async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
  })

//@access private
//route POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please fill all the fields')
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })



  console.log(req.body)
  res.status(200).json(goal)
})

//@access private
//routes PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

//@access private
//route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  console.log(req.params.id);
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  // await goal.remove()

  await Goal.findOneAndDelete({ _id: req.params.id })

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}