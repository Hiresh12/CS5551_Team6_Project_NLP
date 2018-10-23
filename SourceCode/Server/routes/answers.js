module.exports = function (app, db) {
    let answer_details = db.model('answers');
    app.post('/answers/create',(req,res)=>{
        console.log(req);
        let answers=req.body;
        console.log('-------------------------');
        console.log(answers);
        ans_details = new answer_details({
            user_id:answers.userId,
            question_id:answers.questionId,
            answer_desc:answers.answer,
        })
        console.log(ans_details);
        ans_details.save((err, answers) => {
            if (!err) {
                res.send({
                    result: "Success",
                    data: answers
                });
                console.log(answers);
            } else {
                res.send({
                    result: "Failure",
                    message: "Error in creating answer details",
                    error: err
                });
            }
        });
    });
};