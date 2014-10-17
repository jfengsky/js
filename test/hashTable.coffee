HashTable = () ->
  @table = new Array(137)
  @simpleHash = simpleHash
  @showDistro = showDistro
  @put = put
  return