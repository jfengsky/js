# num = []

# for i in [0..100]
#   num[i] = i

# # console.log num

# sameNum = num

# num[0] = 401

# console.log sameNum

# ------------------------



# copy = (_arr1, _arr2)->
#   for i in [0.._arr1.length]
#     _arr2[i] = _arr1[i]

# sameNum2 = []

# copy(num, sameNum2)

# num[0] = 400

# console.log num

# console.log sameNum2


# names = [
#   "David"
#   "Cynthis"
#   "Raymond"
#   "Clayton"
#   "Jennifer"
#   "Cynthis"
# ]
# console.log(names.indexOf("Cynthis"))
# console.log(names.lastIndexOf("Cynthis"))

# console.log names.join(',')
# console.log names.join()
# console.log names.toString()

# cisDept = [
#   "a"
#   "b"
#   "c"
#   "d"
#   "e"
# ]

# dmpDept = [
#   "f"
#   "g"
#   "h"
#   "i"
# ]

# itDiv = cisDept.concat(dmpDept)

# console.log itDiv



# nums = [2, 3, 4, 5]

# console.log nums

# newNum = 1

# nums.unshift(newNum)

# console.log nums


# nums = [3, 4, 5]

# newNum = [7, 8]

# nums.unshift(1, 2)

# console.log nums

# nums = [1, 2, 3, 4, 5, 6, 9]

# nums.pop()

# console.log nums

# nums.shift()

# console.log nums

# nums = [1,2,3,7,8,9]
# newElements = [4,5,6]
# nums.splice(3,2)
# console.log(nums)

# nums = [1,2,3,4,5, 200, 100, 300]
# nums.reverse()
# console.log nums

# square = (num) ->
#   console.log(num, num * num)
#   return

# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# nums.forEach ( _data )->
#   console.log _data
#   return
  

# nums.forEach(square)

# isEven = (num) ->
#   return num %2 == 0

# nums = [2,4,6,8,10]

# even = nums.every(isEven)

# if even
#   console.log 'all num are even'

# words = [
#   "the "
#   "quick "
#   "brown "
#   "fox "
# ]

# sentence = words.reduce (_item1, _item2) ->
#   return _item1 + _item2

# console.log sentence

# grades = [77, 65, 81, 92, 83]

# newGrades = grades.map ( _item ) ->
#   return _item + 5

# console.log(newGrades)

nums = []

for i in [0..20]
  nums[i] = i + 1

console.log nums

evens = nums.filter (_num) ->
  return _num % 2 == 0

console.log evens















