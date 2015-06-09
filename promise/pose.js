//var promise = new Promise(function(resove){
//  console.log('inner promise');
//  resove(32);
//})
//
//promise.then(function(value){
//  console.log(value)
//});
//
//console.log('outer promise')



function taskA(){
  console.log('task A');
  throw new Error("throw Error @ task A");
}

function taskB(){
  console.log('task B');
}

function onRejected(error){
  console.log("cache Error A or B", error)
}

function finalTask(){
  console.log("final Task")
}

var promise = Promise.resolve();

promise.then(taskA).then(taskB).catch(onRejected).then(finalTask);