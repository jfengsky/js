Stack = () ->
  @dataStore = []
  @top = 0

  @push = (element) ->
    @dataStore[@top++] = element
    return

  @pop = () ->
    @dataStore[--@top]

  @peek = () ->
    @dataStore[@top - 1]

  @length = () ->
    @top

  @clear = () ->
    @top = 0
    return
  return

s = new Stack()
s.push('jfeng')
s.push('huifang')
s.push('zihan')
console.log(s.length())
console.log(s.peek())
s.push('test')
console.log(s.peek())
popped = s.pop()
console.log(popped)
