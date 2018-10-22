const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questions = new Schema({
    questions:{
        question_id:String,
        question_desc:String,
    },
    keywords:{
        key1:String,
    }
});

exports.module = mongoose.model('questions', questions);