let code = 0
let start = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && code == 0) {
        code = 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && code == 1) {
        code = 2
    }
})
basic.forever(function () {
    if (input.logoIsPressed() && code == 2) {
        code = 3
    }
})
basic.forever(function () {
    if (input.logoIsPressed() && code == 4) {
        code = 5
    }
})
basic.forever(function () {
    if (code == 4 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && code == 3) {
        code = 4
    }
})
basic.forever(function () {
    if (code == 1 && (input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 3 && (input.logoIsPressed() || input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 2 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
    if (code == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
})
basic.forever(function () {
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
})
basic.forever(function () {
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
