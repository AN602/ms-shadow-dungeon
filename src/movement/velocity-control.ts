export function increaseVelocityX(timing: number) {
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vx < window.maxVelocity) {
            window.globalVelocity.vx += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function increaseVelocityY(timing: number) {
    window.globalVelocityTiming.vyt = setInterval(function () {
        if (window.globalVelocity.vy < window.maxVelocity) {
            window.globalVelocity.vy += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}

export function decreaseVelocityX(timing: number) {
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vx > -window.maxVelocity) {
            window.globalVelocity.vx -= 1;
        } else {
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function decreaseVelocityY(timing: number) {
    window.globalVelocityTiming.vyt = setInterval(function () {
        if (window.globalVelocity.vy > -window.maxVelocity) {
            window.globalVelocity.vy -= 1;
        } else {
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}

export function resetVelocityX(timing: number) {
    console.log("resetting x: " + window.globalVelocity.vx);
    clearInterval(window.globalVelocityTiming.vxt);
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vx > 0) {
            window.globalVelocity.vx -= 1;
        } else if (window.globalVelocity.vx < 0) {
            window.globalVelocity.vx += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function resetVelocityY(timing: number) {
    console.log("resetting y: " + window.globalVelocity.vy);
    clearInterval(window.globalVelocityTiming.vyt);
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vy > 0) {
            window.globalVelocity.vy -= 1;
        } else if (window.globalVelocity.vy < 0) {
            window.globalVelocity.vy += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}