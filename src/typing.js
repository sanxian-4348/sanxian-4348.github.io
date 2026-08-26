(function () {
    const intro = document.querySelector('#intro-screen');
    const brand = document.querySelector('#intro-brand');
    if (!intro || !brand) return;

    const text = brand.textContent;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
        intro.classList.add('is-done');
        return;
    }

    brand.textContent = '';
    brand.classList.add('is-typing');

    let index = 0;
    const typeNextCharacter = function () {
        brand.textContent += text[index];
        index += 1;

        if (index < text.length) {
            window.setTimeout(typeNextCharacter, 150);
        } else {
            window.setTimeout(function () {
                intro.classList.add('is-done');
            }, 500);
        }
    };

    typeNextCharacter();
})();