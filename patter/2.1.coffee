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

result = do ->
  111

myFunc = (param) ->
  if !myFunc.cache[param]
    result1 = {}
    myFunc.cache[param] = result
  myFunc.cache[param]