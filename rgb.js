var genfun = require('generate-function')

var css = genfun()
  ('function (color) {')
    ('return "rgb("+ ~~color.get(0) + ", " + ~~color.get(1) + ", " + ~~color.get(2) + ")"')
  ('}')

module.exports = css.toFunction()
