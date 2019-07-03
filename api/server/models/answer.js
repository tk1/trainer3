'use strict'

module.exports = function (Answer) {
  Answer.observe('before save', (context, next) => {
    if (context.isNewInstance) {
      var answer = context.instance
      answer.createdAt = Date.now()
      next()
    }
  })
}
