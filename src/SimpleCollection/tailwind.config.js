function generateColor(name, percentage) {
    return `color-mix(in srgb, var(--on-${name}), var(--${name}) ${percentage}%)`;
}

function generateProgression(name) {
    let progression = {};
    for (let i = 0; i <= 100; i += 5) {
        progression[i] = generateColor(name, i);
    }
    return progression;
}

module.exports = {
    content: ['../*.{js,jsx}', '../**/*.js'],
    theme: {},
    plugins: [require('@tailwindcss/line-clamp')],
    theme: {
        extend: {
            colors: {
                primary: generateProgression('primary'),
                secondary: generateProgression('secondary'),
            }
        }
    }
    
};
