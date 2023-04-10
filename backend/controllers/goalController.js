const asyncHandler = require('express-async-handler')

//@access private
//route GET /api/goals
const getGoals = asyncHandler(
    async (req, res) => {
        res.status(200).json({ message: 'Get Goals' })
    })

//@access private
//route POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please fill all the fields')
    }
    console.log(req.body)
    res.status(200).json({ message: 'Create Goal' })
})

//@access private
//routes PUT /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

//@access private
//route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}