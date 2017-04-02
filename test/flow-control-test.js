const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')
//-------------------
function basicTeenager(basicTeenager){
  if(basicTeenager >= 13 && basicTeenager < 19){
    return `You are a teenager!`;
  } else {
    return undefined;
  }
}
basicTeenager(13);
basicTeenager(12);

function teenager(teenager){
  if(teenager >= 13 && teenager < 19){
    return `You are a teenager!`;
  } else {
    return `You are not a teenager`;
  }
}
teenager(12);
teenager(13);
teenager(29);

function ageChecker(ageChecker){
  if(ageChecker >= 13 && ageChecker < 19){
    return `You are a teenager!`;
  } else if(ageChecker < 13){
    return `You are a kid`;
  } else {
    return "You are a grownup"
  }
}
ageChecker(13);
ageChecker(12);
ageChecker(29);

function ternaryTeenager(age){
    conditionToTest: (age>= 13 && age < 19)
    return
    valueToBeReturnedIfTrue: `You are a teenager`;
    valueToBeReturnedIfFalse: `You are not a teenager`;
  
}

var switchAge = 14;
switch (switchAge) {
  case(switchAge >= 13 && switchAge < 19):
    return `You are a teenager`;
    break;

  default:
    return `You have an age`;
    break;
}

//----------------------
describe('flow-control', () => {

  before(done => {
    const src = path.resolve(__dirname, '..', 'flow-control.js')

    jsdom.env('<div></div>', [src], (err, window) => {
      if (err) {
        return done(err)
      }

      Object.keys(window).forEach(key => {
        global[key] = window[key]
      })

      return done()
    })
  })

  describe('basicTeenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(basicTeenager(13)).toEqual("You are a teenager!");
    })

    it('should return undefined if the age is not between 13-19', () => {
      expect(basicTeenager(12)).toBe(undefined)
    })

  })

  describe('teenager', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(teenager(13)).toEqual("You are a teenager!")
    })

    it('should return "you are not a teenager" if the age is not between 13-19', () => {
      expect(teenager(12)).toEqual("You are not a teenager")
      expect(teenager(29)).toEqual("You are not a teenager")
    })
  })

  describe('ageChecker', () => {
    it('should return "You are a teenager!" if the age is between 13-19', () => {
      expect(ageChecker(13)).toEqual("You are a teenager!")
    })

    it('should return "You are a kid" if the age is 12 or below', () => {
      expect(ageChecker(12)).toEqual("You are a kid")
    })

    it('should return "You are a grownup" if the age is 20 or above', () => {
      expect(ageChecker(29)).toEqual("You are a grownup")
    })
  })

  describe('ternaryTeenager', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(ternaryTeenager(75)).toEqual("You are not a teenager")
    })
  })

  describe('switchAge', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(switchAge(75)).toEqual("You have an age")
      expect(switchAge(7)).toEqual("You have an age")
    })
  })
})
