const fatHello = () => {
  return 'fat hello world'
}

const snazzyFatHello = () => 'hello world'

const helloWorld = function () {
    return 'hello world'
}

const fatMultiply = (num1, num2) => num1 * num2

const numbers = [1,2,3,4]

numbers.map(num => num * 2)

//this don't look as good
numbers.map(function (num) {
  return num* 2
})
