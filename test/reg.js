var href = "http://vacations.ctrip.com/whole-12B126-U-Shanghai/?searchvalue=%c8%fd%d1%c7%c2%c3%d3%ce&searchText=%c8%fd%d1%c7%c2%c3%d3%ce";
// var href = "http://vacations.ctrip.com/mice-12B131072-U-nanjing/?searchValue=%c8%fd%d1%c7%c2%c3%d3%ce&searchText=%c8%fd%d1%c7%c2%c3%d3%ce";
// var href = "http://vacations.ctrip.com/whole-2A1100066B126-U-shanghai/?searchValue=%ba%bc%d6%dd%c2%c3%d3%ce&searchText=%ba%bc%d6%dd%c2%c3%d3%ce#ctm_ref=va_lst_2_flt_p1_2_2_txt";

// var href = "http://vacations.ctrip.com/whole-2A1100066B126D11-U-shanghai/?searchValue=%ba%bc%d6%dd%c2%c3%d3%ce&searchText=%ba%bc%d6%dd%c2%c3%d3%ce";
// var href = "http://vacations.ctrip.com/around-2B512N26-U-shanghai/?searchValue=%ba%bc%d6%dd%c2%c3%d3%ce&searchText=%ba%bc%d6%dd%c2%c3%d3%ce#ctm_ref=va_ard_2_flt_p1_2_2_txt";
var reg = /(whole|travel|grouptravel|around|freetravel|youxue|mice|dailytour|visa)-(\d+|(\d+)A(\d+))B(\w+-U-)(\w+)/


var cityValue = 777;
var cityEname = 'beijing';
// console.log(reg.test(str));



var urlArr = reg.exec(href);
console.log(urlArr)

// 判断B前面是否有A
if(/A/.test(urlArr[2])){
  // 有A,替换A前面的数字和城市拼音名
  href = href.replace(reg, urlArr[1] + '-' + cityValue + 'A' + urlArr[4] + 'B' + urlArr[5] + (cityEname || urlArr[6]));
  console.log(href)
} else {
  // 没有A，直接替换B前面的数字和城市拼音名
  // href = str1.replace(reg, urlArr[1] + '-' + n1 + 'B' + urlArr[5] + (n2 || urlArr[5]));
  href = href.replace(reg, urlArr[1] + '-' + cityValue + 'B' + urlArr[5] + (cityEname || urlArr[5]));
  console.log(href)
}

// var arr = []

// for(var i = 0; i < 8; i++){
//   arr.push(RegExp['$' + i])
// }

// console.log(arr)

// reg2 = RegExp.$2;

// // console.log(/\d+/.test(reg2))

// console.log(RegExp.$1);

// console.log(RegExp.$2);

// console.log(RegExp.$3);
// console.log(RegExp.$4);
// console.log(RegExp.$5);

// href = str.replace(reg, RegExp.$1 + '-' + n1 + 'B' + RegExp.$3 + n2);

// console.log(href);

// console.log(str);