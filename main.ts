function on_gesture_shake () {
    steps += 1
}
let steps = 0
let touchCounter = 0
let onState = false
input.onGesture(Gesture.TiltLeft, on_gesture_shake)
input.onGesture(Gesture.TiltRight, on_gesture_shake)
basic.forever(function () {
    let touchCounter2: number;
let onState2: boolean;
while (true) {
        if (input.logoIsPressed()) {
            touchCounter += 1
        } else {
            touchCounter = 0
        }
        if (touchCounter > 10000) {
            console.log("on")
onState = !(onState)
            touchCounter = 0
            break;
        }
    }
    while (true) {
        // for gesture in accelerometer.get_gestures():
        // if gesture == "up" or gesture=="down"or gesture=="left"or gesture=="right":
        // steps+=1
        if (onState) {
            basic.showNumber(steps)
            basic.pause(1000)
            basic.clearScreen()
            basic.pause(2000)
        }
        if (input.logoIsPressed()) {
            touchCounter += 1
        } else {
            touchCounter = 0
        }
        if (touchCounter > 10000) {
            console.log("on")
onState = !(onState)
            touchCounter = 0
            break;
        }
    }
})
