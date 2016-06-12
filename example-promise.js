// function getTempCallBack(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philidelphia', function(err, temp) {
//   if(err) console.log(err);
//   console.log(temp);
// });
//
//
// function getTempPromise(location) {
//   return new Promise(function(resolve,reject) {
//     setTimeout(function() {
//       resolve(78);
//       reject('City not found');
//     }, 2000);
//
//   });
// }
//
// getTempPromise('Philidelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge Area


function addPromise (a, b) {

  return new Promise((resolve, reject) => {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a*b);
    }

    reject('One case is not a number');
  });
}

addPromise(3, 4).then(function(product) {
  console.log(product);
}, function(err) {
  console.log(err);
});

addPromise('apple', 4).then((product)=> {
  console.log(product);
}, function(err) {
  console.log(err);
})
