Dictionary = () ->
  @datastore = []

  # 向字典中添加元素
  @add = (key, value) ->
    @datastore[key] = value
    return

  # 查找元素
  @find = (key) ->
    @datastore[key]

  @remove = (key) ->
    delete @datastore[key]
    return

  @showAll = () ->
    for key in  Object.keys(@datastore)
      console.log(key + "->" + @datastore[key])
    return

  return

pbook = new Dictionary()
pbook.add('mike', 123)
pbook.add('david', 345)
pbook.add('cynthia', 567)

pbook.showAll()

pbook.remove('mike')
console.log('----')
pbook.showAll()