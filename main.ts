// let r = 0
// let p = 0
// let s = 0
// let z = 0
// let y = 0
// let x = 0
//     x = input.acceleration(Dimension.X)
//     y = input.acceleration(Dimension.Y)
//     z = input.acceleration(Dimension.Z)
//     s = input.acceleration(Dimension.Strength)

input.onButtonPressed(Button.A, function() {
    ExpSense.restart()
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function() {
    ExpSense.difficultyDec()
    ExpSense.restart()
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    ExpSense.difficultyInc()
    ExpSense.restart()
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})



basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)




ExpSense.onExplosiveState(function(xaxis: number, yaxis: number, shakingvalue: number) {
    console.logValue("xaxis", xaxis)
    console.logValue("yaxis", yaxis)
    console.logValue("shakingvalue", shakingvalue)
    if (xaxis == 1 || 2 || -1 || -2) {
        basic.showLeds(`
. . . . .
. . # . .
. . . . .
. . . . .
. . . . .
`)
    } else if (xaxis == 0) {
        basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)
    }
})

ExpSense.onExplode(function() {
    basic.showString("You lost.")
})
    










// console.logValue("x", x)
// console.logValue("y", y)
// console.logValue("z", z)
// console.logValue("strength", s)

