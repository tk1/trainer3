'use strict'

module.exports = function (Problem) {
  Problem.random = function (cb) {
    Problem.find((err, problems) => {
      if (err) {
        cb(err)
      }
      var idx = Math.floor(Math.random() * problems.length)
      cb(null, problems[idx])
    })
  }

  Problem.remoteMethod('random', {
    http: {
      path: '/random',
      verb: 'get'
    },
    returns: {
      arg: 'problem',
      type: 'Object'
    }
  })
}
