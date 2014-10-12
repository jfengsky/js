List = () ->
  # 列表的元素个数
  @listSize = 0

  #列表的当前位置
  @pos = 0

  #初始化一个空数组来保存当前元素
  @dataStore = []

  #清空列表中所有元素
  #@clear = clear

  @toString = () ->
    this.dataStore

  #@insert = insert

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

  #@front = front

  # @end = end

  # @prev = prev

  # @next = next

  @length = () ->
    this.listSize

  # @currPos = currPos

  # @moveTo = moveTo

  # @getElement = getElement

  # @contains = contains

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
console.log(names)
console.log(names.length())
console.log(names.toString())