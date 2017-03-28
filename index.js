const app = "I don't do much."


var appendKitten = (name) => {
   var newKitten = [...kittens, name]

   return newKitten
}

var prependKitten = (name) => {
  var array = [name, ...kittens]
  return array
}

var removeLastKitten = () => {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

var removeFirstKitten = () => {
  return kittens.slice(1)
}

var destructivelyRemoveFirstKitten = (name) => {
  kittens.shift()
}

var destructivelyAppendKitten = (name) => {
  kittens.push(name)
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = (name) => {
  kittens.pop()
}
