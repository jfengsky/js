List = () ->
  # 列表的元素个数
  @listSize = 0

  #列表的当前位置
  @pos = 0

  #初始化一个空数组来保存当前元素
  @dataStore = []

  #清空列表中所有元素
  @clear = () ->
    delete @dataStore
    @dataStore = []
    @listSize = @pos = 0
    return

  @toString = () ->
    this.dataStore

  @insert = (element, after) ->
    insertPos = @find after
    if insertPos > -1
      @dataStore.splice(insertPos + 1, 0, element)
      ++@listSize
      return true
    false

  @append = (element) ->
    @dataStore[@listSize++] = element
    return

  @remove = (element) ->
    fountAt = @find(element)
    if fountAt > -1
      @dataStore.splice(fountAt, 1)
      --this.listSize
      return true
    false
  # 到最前面
  @front = ()->
    @pos = 0
    return

  # 到最后
  @end = () ->
    @pos = @listSize - 1
    return
  
  # 向前移一位
  @prev = () ->
    if @pos > 0
      --@pos
    return

  # 向后移动一位
  @next = () ->
    if @pos < @listSize - 1
      ++@pos
    return

  @length = () ->
    this.listSize

  @currPos = () ->
    @pos

  # 移动到位置
  @moveTo = (position) ->
    @pos = position

  @getElement = () ->
    @dataStore[@pos]

  # 判断元素是否在列表中
  @contains = (element) ->
    for i in [0..@dataStore.length]
      if @dataStore[i] is element
        return true
    false

  @find = (element) ->
    for i in [0..@dataStore.length]
      if @dataStore[i] is element
        return i
    -1
  return


names = new List()
names.append('jfeng')
names.append('huifang')
names.append('panpan')
names.append('brain')
console.log(names)
console.log(names.length())
console.log(names.toString())

names.front()
console.log(names.getElement())

names.next()
console.log(names.getElement())