Dictionary () ->
  @datastore = []

  # 向字典中添加元素
  @add = (key, value) ->
    @datastore[key] = value
    return
  return