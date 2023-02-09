input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.forever(function () {
    
let r = 0
let p = 0
let s = 0
let z = 0
let y = 0
let x = 0
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    s = input.acceleration(Dimension.Strength)

input.onButtonPressed(Button.A, function() {
    
})
    
console.logValue("x", x)
console.logValue("y", y)
console.logValue("z", z)
console.logValue("strength", s)
basic.pause(100)
})
