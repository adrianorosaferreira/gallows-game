function createSprite(identifier) {
    let sprite = document.querySelector(identifier),
        current = 1;

    sprite.classList.add('frame' + current);

    const moveFrame = (from, to) => {
        sprite.classList.remove('frame' + from)
        sprite.classList.add('frame' + to)
    }

    const nextFrame = () => {
        if (!isFinished()) moveFrame(current, ++current)
    };

    const reset = () => {
        moveFrame(current, 1);
        current = 1;
    }

    const isFinished = () => current == 9;

    return {
        nextFrame,
        reset,
        isFinished
    }
}