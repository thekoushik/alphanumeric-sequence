const { computeNext } = require('../build/index');

(async function () {
  let last = 'Zg9008';
  do {
    last = computeNext(last, { length: 6, autoIncreaseLength: false });
    console.log(last);
  } while (last);
  //zz99
  //====
  //Aa00
  //Aa99
  //Ab00
  //....
  //Az99
  //Ba00
  //....
  //Bz99
  //....
  //Zz99
  /////////////
  //ZzA0
  //....
  //Zzz9
  //ZAa0
  //ZAz0
  //ZZz9
})();