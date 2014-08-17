(function( window, undefined){
var
  rootjQuery,

  readyList,

  core_strundefined = typeof undefined,

  location = window.location,
  document = window.document,
  docElem = document.documentElement,

  _jQuery = window.jQuery,
  _$ = window.$,

  class2type = {},

  core_deletedIds = [],

  core_version = "2.0.3",

  core_concat = core_deletedIds.concat,
  core_push = core_deletedIds.push,
  core_slice = core_deletedIds.slice,
  core_indexOf = core_deletedIds.indexOf,
  core_toString = core_deletedIds.toString,
  core_hasOwn = core_deletedIds.hasOwnProperty,
  core_trim = core_version.trim,

  jQuery = function( selector, context ){
    return new jQuery.fn.init( selector, context, rootjQuery );
  },

  core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

  core_rnotwhite = /\s+/g,

  requickExpr = /^(?:\s*(<]\w\W]+>)[^>]*|#([\w-]*))$/;

jQuery.fn = jQuery.prototype = {

  jquery: core_version,

  constructor: jQuery,

  init: function( selector, context, rootjQuery){
    var match, elem;
    if ( !selector ){
      return this;
    }

    if ( typeof selector === 'string' ){
      if ( selector.charAt(0) === '<' && selector.charAt(selector.length - 1) === '>' && selector.length >= 3){
        match = [null, selector, null];
      } else {
        match = requickExpr.exec( selector );
      }

      if ( match && (match[1] || !context ) ){

        if ( match[1] ){
          context = context instanceof jQuery ? context[0] : context;

          jQuery.merge();

        } else {

        }

      }

    } else if ( selector.nodeType ) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;
    } else if ( jQuery.isFunction( selector) ) {
      return rootjQuery.ready( selector )
    }

    if ( selector.selector !== undefined ){
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
  },

  selector: "",

  length: 0,

  toArray: function(){
    return core_slice.call( this )
  },

  get: function( num ){
    return num == null ?
      this.toArray() :
      ( num < 0 ? this[ this.length + num] : this[ num ] );
  },

  pushStack: function( elems ) {
    var ret = jQuery.merge( this.constructor(), elems );
    ret.prevObject = this;
    ret.context = this.context;
    return ret;
  },

  each: function( callback, args ) {
    return jQuery.each( this, callback, args );
  },

  ready: function( fn ){
    jQuery.ready.promise().done( fn );
    return this;
  },

  slice: function(){
    return this.pushStack( core_slice.apply( this, arguments ) );
  },

  first: function(){
    return this.eq( 0 );
  },

  last: function(){
    return this.eq( -1 )
  },

  eq: function( i ){
    var len = this.length,
      j = +i + ( i < 0 ? len : 0);
    return this.pushStack( j >= 0 && j < len ? [this[j]] : []);
  },

  map: function( callback ){

  },
  end: function(){

  },
  push: core_push,
  sort: [].sort,
  splice: [].splice

}

jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {

}
jQuery.extend({
  expando: "jQuery" + (core_version + Math.random() ).replace( /\D/g, '' ),

  noConflict: function( deep ){
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery

  },
  ready: function( fn ) {
    jQuery.ready.promise().done( fn )
  },
  isFunction: function( obj ){
    return jQuery.type(obj) === 'function'
  },
  isArray: Array.isArray,
  isWindow: function( obj ){
    return obj != null && obj === obj.window;
  },
  isNumeric: function( obj ){
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },
  type: function( obj ){
    if ( obj == null) {
      return String( obj )
    }
    return typeof obj === 'object' || typeof obj === 'function' ?
      class2type[ core_toString.call( obj )] || 'object' :
      typeof obj
  },
  isPlainObject: function(){
    if ( jQuery.type( obj ) !== 'object' || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false
    }

    try {
      if ( obj.constructor && !core_hasOwn.call( obj.constructor.prototype, 'ksPrototypeOf') ) {
        return false
      }
    } catch ( e ) {

    }
  },
  isEmptyObject: function(){
    var name;
    for (name in obj) {
      return false
    }
    return true
  },
  error: function( msg ){
    throw new Error( msg )
  },
  parseHTML: function(){

  },
  parseJSON: JSON.parse,
  parseXML: function(){

  },
  globalEval: function( code ){

  },
  camelCase: function(){

  },
  nodeName: function( elem, name ){
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
  },
  each: function( obj, callback, args ){
    var value, i = 0,
        length = obj.length,
        isArray = isArraylike( obj );
    if ( args ) {

    } else {
      if ( isArray ) {
        for(; i < length; i++ ){
          value = callback.call( obj[i], i, obj[i] );
          if ( value === false ) {
            break;
          }
        }
      } else {
        for ( i in obj) {
          value = callback.call( obj[i], i, obj[i]);
          if (value = false) {
            break;
          }
        }
      }
    }
  },
  trim: function( text ){
    return text == null ? '' : core_trim.call( text )
  },
  makeArray: function(){

  },
  inArray: function( elem, arr, i ) {

  },
  merge: function( first, second ){

  },
  grep: function( elems, callback, inv ){
    var retVal,
        ret = [],
      i = 0,
      length = elems.length;
  }
  guid: 1,
  proxy: function(){

  },
  access: function(){

  },
  now: function(){

  },
  swap: function(){

  }
});

jQuery.callbacks = function( options ){

}


})( window );