Queue = () ->

  # 数组用于存放元素
  @dataStore = []

  # 向队尾添加一个元素
  @enqueue = (element) ->
    @dataStore.push(element)
    return

  # 删除队首元素
  @dequeue = () ->
    @dataStore.shift()

  # 读取队首元素
  @front = () ->
    @dataStore[0]

  # 读取队尾元素
  @back = () ->
    @dataStore[@dataStore.length - 1]
  
  # 显示队列内所有元素
  @toString = () ->
    retStr = "";
    for i in [0..@dataStore.length]
      retStr += @dataStore[i] + "\n"
    retStr

  # 判断队列是否为空
  @empty = () ->
    if @dataStore.length is 0
      return true
    else
      false

  return