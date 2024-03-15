module.exports = function reverseString(string) {
  let reverse = "";
  if (typeof string !== "string") {
    throw new TypeError("TypeError, its not a string");
  }
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
};
