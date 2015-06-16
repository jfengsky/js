var list = [{
  OrderDay: 2,
  Hotels: [111]
},{
  OrderDay: 4,
  Hotels: [222]
},{
  Hotels: [333]
},{
  Hotels: [444]
},{
  Hotels: [555]
}]

 =function sortArr(_array){
  var templist = [];
  $.each(_array, function(_index, _item){
    if(_item.OrderDay){
      templist[_item.OrderDay - 1] = _item;
    }
  })
  for(var i = 0; i < _array.length; i++){
    if(!templist[i]){
      templist[i] = {}
    }
  }
  return templist
}


console.log(sortArr(list))