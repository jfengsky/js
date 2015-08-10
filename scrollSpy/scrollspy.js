/*
 
 */

(function() {
  var doc = document,
    win = window,
    idArray = [],
    idTopArray = [],

    // 需要显示的范围
    showRange = {
      top: 0,
      bottom: 200
    },

    hasCurrentId = '';

  for (var i = 1; i <= 6; i++) {
    idArray.push('#spy' + i);
  };

  // 初始化各个锚点高度
  $.map(idArray, function(_item) {
    idTopArray.push({
      id: _item,
      top: $(_item).offset().top
    });
  });

  $(win).bind('scroll.spy', function() {
    var tempScrollTop = $(win).scrollTop();
    $.map(idTopArray, function(_item) {
      if( _item.top > tempScrollTop + showRange.top && _item.top < tempScrollTop + showRange.bottom){
        if(hasCurrentId !== _item.id){
          $('#J_top').find('li').removeClass('cur');
          $('#J_top').find('li[data-tag="' + _item.id + '"]').addClass('cur');
          hasCurrentId = _item.id;
        }
      }
    });

    if( tempScrollTop <= idTopArray[0].top + showRange.top || tempScrollTop >= idTopArray[idTopArray.length - 1].top + showRange.bottom){
      $('#J_top').find('li').removeClass('cur');
    }

  });



})();