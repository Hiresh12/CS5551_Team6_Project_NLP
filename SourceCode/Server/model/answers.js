const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answers = new Schema({
         user_id:String,
         question_id:String,
        answer_desc:String,
});

exports.module = mongoose.model('answers', answers);