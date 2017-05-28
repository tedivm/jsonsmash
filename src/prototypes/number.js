'use strict'

Number.prototype.toAbbreviated = function() {

  if(this > Math.pow(10, 12)) {
    var divisor = Math.pow(10, 12)
    var unit = 'T'
  } else if(this > Math.pow(10, 9)) {
    var divisor = Math.pow(10, 9)
    var unit = 'B'
  } else if(this > Math.pow(10, 6)) {
    var divisor = Math.pow(10, 6)
    var unit = 'M'
  } else if(this > Math.pow(10, 3)) {
    var divisor = Math.pow(10, 3)
    var unit = 'K'
  } else {
    var divisor = 1
    var unit = ''
  }

  return ((this / divisor).toPrecision(3)) + unit
}


Number.prototype.toAbbreviatedBytes = function() {

   const base = 1024
   if(this <= base) {
     return this
   }

   if(this >= Math.pow(base, 4)) {
     var divisor = Math.pow(base, 4)
     var unit = 'T'
   } else if(this >= Math.pow(base, 3)) {
     var divisor = Math.pow(base, 3)
     var unit = 'G'
   } else if(this >= Math.pow(base, 2)) {
     var divisor = Math.pow(base, 2)
     var unit = 'M'
   } else if(base >= 1024){
     var divisor = base
     var unit = 'K'
   }

  return Math.round(this / divisor) + unit
}