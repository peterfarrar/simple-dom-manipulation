// create a list
function createList() {
  var names = [
    'Matthew Pugh',
    'Elsie-Mae Mclellan',
    'Mylie Barker',
    'Eliana Lowe',
    'Blade Madden',
    'Seth Leach',
    'Kush Stokes',
    'Arissa Rich',
    'Ellie-May Suarez',
    'Roger Mansell',
  ]
  var list = document.createElement('ul')
  names.forEach(function(name) {
    var li = document.createElement('li')
    li.textContent = name
    list.appendChild(li)
  })
  var element = document.getElementById("list-me")
  element.appendChild(list)
}

function typeStuff() {
  const legalLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ]
  var boxIndex = 0;
  function handleKeydown(event) {
    if (legalLetters.includes(event.key)) {
      boxIndex ++
      var boxId = "box-" + parseInt(boxIndex)
      console.log('box id:', boxId)
      var box = document.getElementById(boxId)
      box.textContent = event.key
      if (boxIndex > 4) { 
        boxIndex = 0 
      }
    }
  }
  window.addEventListener('keyup', handleKeydown)
}

function doItAll() {
  createList()
  typeStuff()
}

document.onload = doItAll()