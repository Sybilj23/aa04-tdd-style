function returnsThree() {
return 3;
}

function reciprocal(n) {
if(n < 1 || n > 1000 ){
throw new RangeError('number must inbetween 1 - 1000')
 }
return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
