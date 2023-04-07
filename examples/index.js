const { Generator } = require('../build/index');

(async function () {
  const gen = new Generator(6);
  gen.reset('zY7838');
  while(true) {
    console.log(gen.getNext());
  }
})();