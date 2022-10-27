let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance <= 10) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance <= 15) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance <= 20) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    } else if (distance <= 25) {
        basic.showLeds(`
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            `)
    } else if (distance <= 30) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            `)
    } else if (distance <= 35) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            `)
    } else if (distance <= 40) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
    } else if (distance <= 43) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
    } else if (distance <= 46) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
    	
    }
})
