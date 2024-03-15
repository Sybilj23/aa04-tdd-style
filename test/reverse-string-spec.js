const chai = require('chai');
const expect = chai.expect;
const reverseString = require('../problems/reverse-string');

describe('reverString', function(){
  let value  = reverseString('fun');
it('should rever string', function(){
      expect(value).to.equal('nuf')
})
})
