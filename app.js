let heldValue = null
let heldOperation = null
let nextValue = null

function showValue(location, value) {
    if(value === null) {
        $(location).text('')
    } else {
        $(location).text(Number(value))
    }
}

function updateDisplay() {
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

function clearAll() {
    heldValue = null
    heldOperation = null 
    nextValue = null
}

function clearEntry() {
    nextValue = null
}

function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x, y) {
    return Number(x) - Number(y)
}


function multiply(x, y) {
    return Number(x) * Number(y)
}


function divide(x, y) {
        return Number(x) / Number(y)
}

function setHeldOperation(operation) {
    if(heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue)
    } else if(nextValue !== null && heldOperation === null) {
        heldValue = nextValue
    } else {
        nextValue = null
        heldOperation = operation
    }
    nextValue = null
    heldOperation = operation
}

$('.digits button').on('click', function() {
    if (nextValue === null) {
        nextValue = "0"
    }
    nextValue += $(this).text()
    $('.next-value').text(nextValue)
    updateDisplay()  
})

$('.add').on('click', function() {
    setHeldOperation(add)
    $('.next-operation').text("+")
    updateDisplay()
})

$('.subtract').on('click', function() {
    setHeldOperation(subtract)
    $('.next-operation').text("-")
    updateDisplay()
})

$('.multiply').on('click', function() {
    setHeldOperation(multiply)
    $('.next-operation').text("x")
    updateDisplay()
})

$('.divide').on('click', function() {
    setHeldOperation(divide)
    $('.next-operation').text("/")
    updateDisplay()
})

$('.equals').on('click', function() {
    setHeldOperation(null)
    $('.next-operation').text("")
    updateDisplay()
})

$('.clear-all').on('click', function() {
    clearAll()
    $('.next-operation').text("")
    updateDisplay()
})

$('.clear-entry').on('click', function() {
    clearEntry()
    updateDisplay()
})

// BONUS GOALS

// square root
function sqRoot(x) {
    return Math.sqrt(Number(x)) 
}

$('.sqroot').on('click', function() {
    setHeldOperation(sqRoot)
    setHeldOperation(null)
    updateDisplay()
})

// plus/minus button

$('.opposite').on('click', function() {
    let opposite = nextValue *= -1
    $('.next-value').text(opposite)
    updateDisplay()
})

