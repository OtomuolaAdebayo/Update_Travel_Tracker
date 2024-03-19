const Expenses = require('../models/expensesModel')

const createExpenses = async(req, res) => {
  try {
    const { expensesName, amount, description } = req.body

    const newExpenses = Expenses({
      expensesName,
      amount,
      description
    })
    const save_new_expenses = newExpenses.save()
    res.status(200).json({message: 'Expenses created successfully', newExpenses})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getExpenses = async(req, res) => {
  try {
    const expensesDetails = await Expenses.find()
    res.status(200).json({message: 'Expenses details extracted', expensesDetails})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const updateExpenses = async(req, res) => {
  try {
    const { id } = req.params
    const expensesDataUpdate = await Expenses.findByIdAndUpdate(id, {
      $set: req.body,
      new: true,
    });
    res
      .status(200)
      .json({ message: "Updated Expenses data", expensesDataUpdate });
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExpensesData = await Expenses.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Expenses data deleted" , deleteExpensesData});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createExpenses,
  getExpenses,
  updateExpenses,
  deleteExpenses
}