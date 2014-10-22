man = 
  hands: 2
  legs: 2
  heads: 1


if typeof Object.prototype.clone is "undefined"
  Object.prototype.clone = () ->

for i of man
  if man.hasOwnProperty(i)
    console.log(i, ":", man[i])

for i of man
  console.log(i, ":", man[i])


(->
  alert 'watch out'
  return
)()

do ->
  alert 'watch out'
  return