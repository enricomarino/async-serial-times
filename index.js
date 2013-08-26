module.exports = function (n, iterator, callback) {
  var i = 0;

  function complete (err) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    i += 1;
    if (i === n) {
      callback();
      return;
    }
    iterate();
  }

  function iterate () {
    iterator(i, complete);
  }

  iterate();
};
