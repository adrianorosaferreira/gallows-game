function createSprite(identifier) {
    let sprite = document.querySelector(identifier);
    let current = 1;
    sprite.classList.add('frame' + current);

    moveFrame = function(from, to) {
        sprite.classList.remove('frame' + from)
        sprite.classList.add('frame' + to)
    }

    nextFrame = function() {
        if (!isFinished()) moveFrame(current, ++current);
    }

    reset = function() {
        moveFrame(current, 1);
        current = 1;
    }

    isFinished = function() {
        return current == 9;
    }

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    }
}