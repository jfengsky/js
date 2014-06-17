/**
 * Description:
 * Author: jiangfeng(jiang.f@ctrip.com)
 * Date: 2014-06-16 19:07
 *
 */

var memCard = [],
    memBirthday = [],
    departDate = "2014-05-16",
    departDateArr = departDate.split('-');
$.each($('.J_card'), function(_index, _item){
  var tempNum = $(_item).text();
  if (tempNum){
    memCard.push({"key":$(_item), "value":tempNum})
  }
});

$.each($(".J_birthday"), function(_index, _item){
  var tempNum = $(_item).text();
  if (tempNum) {
    memBirthday.push({"key":$(_item), "value":tempNum})
  }
});

$.each(memCard, function(_index, _item){
  var tempBirthday = _item.value.substr(6,8);
  _item.value = tempBirthday.substring(0,4) + '-' + tempBirthday.substring(4,6) + '-' + tempBirthday.substring(6,8);
  memBirthday.push({"key": _item.key, "value": _item.value})
});

$.each(memBirthday, function(_index, _item){
  var birthdayArr = _item.value.split('-');
  if( departDateArr[0] - birthdayArr[0] > 70 || (departDateArr[0] - birthdayArr[0] === 69) && (departDateArr[1] - birthdayArr[1] >= 1) ){
    _item.isOld = true
  } else {
    _item.isOld = false
  }
})
console.log(memBirthday)


//var _birthday = "1945-05-20",
//    _departDate = "2014-05-16";
//var birArray = _birthday.split('-'),
//    depArray = _departDate.split('-');
//if ( depArray[0] - birArray[0] > 70 || (depArray[0] - birArray[0] === 69) && (depArray[1] - birArray[1] >= 1)){
//  console.log( '>70' );
//}
//console.log(depArray[0] - birArray[0]);
//console.log(depArray[1] - birArray[1]);