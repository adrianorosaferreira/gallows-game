function createSprite(identifier) {
    let sprite = document.querySelector(identifier);
    let current = 1;
    sprite.classList.add('frame' + current);

    function nextFrame() {
        sprite.classList.remove('frame' + current);
        current = current + 1 == 10 ? 1 : ++current;
        console.log(current);
        sprite.classList.add('frame' + current);
    }

    return {
        nextFrame: nextFrame
    }
}