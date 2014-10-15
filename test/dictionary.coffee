Dictionary () ->
  @datastore = []

  # 向字典中添加元素
  @add = (key, value) ->
    @datastore[key] = value
    return

  # 查找元素
  @find = (key) ->
    @datastore[key]
  
  return