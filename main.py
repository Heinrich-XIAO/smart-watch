def on_gesture_shake():
    global steps
    steps += 1
steps = 0
touchCounter = 0
onState = False
input.on_gesture(Gesture.TILT_LEFT, on_gesture_shake)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_shake)

def on_forever():
    while True:
        if input.logo_is_pressed():
            touchCounter2 += 1
        else:
            touchCounter2 = 0
        if touchCounter2 > 10000:
            print("on")
            onState2 = not (onState2)
            touchCounter2 = 0
            break
    while True:
        # for gesture in accelerometer.get_gestures():
        # if gesture == "up" or gesture=="down"or gesture=="left"or gesture=="right":
        # steps+=1
        if onState2:
            basic.show_number(steps)
            basic.pause(1000)
            basic.clear_screen()
            basic.pause(2000)
        if input.logo_is_pressed():
            touchCounter2 += 1
        else:
            touchCounter2 = 0
        if touchCounter2 > 10000:
            print("on")
            onState2 = not (onState2)
            touchCounter2 = 0
            break
basic.forever(on_forever)
