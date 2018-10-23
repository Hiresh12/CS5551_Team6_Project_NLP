module.exports = function (app, db) {
    let question_details = db.model('questions');
    app.get('/questions/search',(req,res)=>{
        question_details.find({}).exec((err, questions) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: questions
                });
                console.log(questions);
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in fetching question details",
                    error: err
                });
            }
        });
    });
};