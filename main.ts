input.onButtonPressed(Button.A, function () {
    // Inchid
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    basic.pause(400)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
input.onButtonPressed(Button.B, function () {
    // Invart
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    basic.pause(700)
    wuKong.stopMotor(wuKong.MotorList.M1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Deschid
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
    basic.pause(500)
    // Cobor
    wuKong.setServoAngle(wuKong.ServoList.S0, 45)
    basic.pause(500)
    // Inchid
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
    basic.pause(500)
    // Ridic
    wuKong.setServoAngle(wuKong.ServoList.S0, 15)
    basic.pause(500)
    // Invart
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    basic.pause(500)
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.pause(500)
    // Cobor
    wuKong.setServoAngle(wuKong.ServoList.S0, 45)
    basic.pause(500)
    // Deschid
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
    basic.pause(500)
    // Ridic
    wuKong.setServoAngle(wuKong.ServoList.S0, 15)
    basic.pause(500)
    // Inchid
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
basic.showLeds(`
    . # # # .
    . # . # .
    . # . . .
    . # . . .
    # # # . .
    `)
