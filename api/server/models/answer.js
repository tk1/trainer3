'use strict'

function checkAnswer (problem, text) {
  var correctAnswer = eval('Number(' + problem.definition.expression + ')')
  return Number(text) === correctAnswer
}

module.exports = function (Answer) {
  Answer.observe('before save', (context, next) => {
    if (context.isNewInstance) {
      var answer = context.instance
      answer.createdAt = Date.now()
      Answer.getApp((err, app) => {
        if (err) {
          console.error(err)
          next(err)
        }
        var Problem = app.models.Problem
        Problem.findById(answer.problemId, (err, problem) => {
          if (err) {
            console.error(err)
            next(err)
          }
          answer.result = checkAnswer(problem, answer.text)
        })
      })
      next()
    }
  })
}
