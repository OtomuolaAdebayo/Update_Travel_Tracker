const mongoose = require('mongoose')

const expensesSchema = mongoose.Schema({
  expensesName: {
    type: String,
  }, 
  amount:{
    type: Number
  },
  description: {
    type: String
  }
},
  {
    timestamps: true
  }
)

const Expenses = mongoose.model("Expenses", expensesSchema)
module.exports = Expenses