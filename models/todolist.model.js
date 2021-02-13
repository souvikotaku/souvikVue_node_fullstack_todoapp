const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todolistSchema = new Schema(
	{
		work: { type: String, required: true },
	},
    
    {timestamps: true}
)

const Todolist = mongoose.model('todolist', todolistSchema )

module.exports = Todolist