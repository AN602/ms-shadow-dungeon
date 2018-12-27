export function increaseVelocityX(timing: number) {
    clearInterval(window.globalVelocityTiming.vxt);
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vx < window.maxVelocity) {
            window.globalVelocity.vx += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function increaseVelocityY(timing: number) {
    clearInterval(window.globalVelocityTiming.vyt);
    window.globalVelocityTiming.vyt = setInterval(function () {
        if (window.globalVelocity.vy < window.maxVelocity) {
            window.globalVelocity.vy += 1;
        } else {
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}

export function decreaseVelocityX(timing: number) {
    clearInterval(window.globalVelocityTiming.vxt);
    window.globalVelocityTiming.vxt = setInterval(function () {
        if (window.globalVelocity.vx > -window.maxVelocity) {
            window.globalVelocity.vx -= 1;
        } else {
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function decreaseVelocityY(timing: number) {
    clearInterval(window.globalVelocityTiming.vyt);
    window.globalVelocityTiming.vyt = setInterval(function () {
        if (window.globalVelocity.vy > -window.maxVelocity) {
            window.globalVelocity.vy -= 1;
        } else {
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}

export function resetVelocityX(timing: number) {
    clearInterval(window.globalVelocityTiming.vxt);
    window.globalVelocityTiming.vxt = setInterval(function () {
        console.log("resetting x: " + window.globalVelocity.vx);
        if (window.globalVelocity.vx > 0) {
            window.globalVelocity.vx -= 1;
        } else if (window.globalVelocity.vx < 0) {
            window.globalVelocity.vx += 1;
        } else {
            console.log('clear reset interval for x');
            clearInterval(window.globalVelocityTiming.vxt);
        }
    }, timing);
}

export function resetVelocityY(timing: number) {
    clearInterval(window.globalVelocityTiming.vyt);
    window.globalVelocityTiming.vyt = setInterval(function () {
        console.log("resetting y: " + window.globalVelocity.vy);
        if (window.globalVelocity.vy > 0) {
            window.globalVelocity.vy -= 1;
        } else if (window.globalVelocity.vy < 0) {
            window.globalVelocity.vy += 1;
        } else {
            console.log('clear reset interval for y');
            clearInterval(window.globalVelocityTiming.vyt);
        }
    }, timing);
}