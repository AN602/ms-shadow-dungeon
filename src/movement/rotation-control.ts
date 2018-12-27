export function increaseRotationSpeed(timing: number) {
    clearInterval(window.globalRotationSpeedTiming);
    window.globalRotationSpeedTiming = setInterval(function () {
        if (window.globalRotationSpeed < window.maxRotationSpeed) {
            window.globalRotationSpeed = Math.round((window.globalRotationSpeed + 0.01) * 100) / 100;
        } else {
            clearInterval(window.globalRotationSpeedTiming);
        }
    }, timing);
}

export function decreaseRotationSpeed(timing: number) {
    clearInterval(window.globalRotationSpeedTiming);
    window.globalRotationSpeedTiming = setInterval(function () {
        if (window.globalRotationSpeed > -window.maxRotationSpeed) {
            window.globalRotationSpeed = Math.round((window.globalRotationSpeed - 0.01) * 100) / 100;
        } else {
            clearInterval(window.globalRotationSpeedTiming);
        }
    }, timing);
}

export function resetRotationSpeed(timing: number) {
    clearInterval(window.globalRotationSpeedTiming);
    window.globalRotationSpeedTiming = setInterval(function () {
        console.log("resetting rotation: " + window.globalRotationSpeed);
        if (window.globalRotationSpeed > 0) {
            window.globalRotationSpeed = Math.round((window.globalRotationSpeed - 0.01) * 100) / 100;
        } else if (window.globalRotationSpeed < 0) {
            window.globalRotationSpeed = Math.round((window.globalRotationSpeed + 0.01) * 100) / 100;
        } else {
            console.log('clear reset interval for rotation');
            clearInterval(window.globalRotationSpeedTiming);
        }
    }, timing);
}