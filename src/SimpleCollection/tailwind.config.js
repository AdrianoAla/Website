module.exports = {
    content: ['../*.{js,jsx}', '../**/*.js'],
    theme: {},
    plugins: [require('@tailwindcss/line-clamp')],
    theme: {
        extend: {
            colors: {
                primary: {
                    0: 'var(--on\\_primary)',
                    5: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 5%)',
                    10: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 10%)',
                    15: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 15%)',
                    20: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 20%)',
                    25: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 25%)',
                    30: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 30%)',
                    35: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 35%)',
                    40: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 40%)',
                    45: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 45%)',
                    50: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 50%)',
                    55: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 55%)',
                    60: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 60%)',
                    65: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 65%)',
                    70: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 70%)',
                    75: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 75%)',
                    80: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 80%)',
                    85: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 85%)',
                    90: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 90%)',
                    95: 'color-mix(in srgb, var(--on\\_primary), var(--primary) 95%)',
                    100:'var(--primary)',
        
                },

                secondary: {
                    0: 'var(--on\\_secondary)',
                    5: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 5%)',
                    10: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 10%)',
                    15: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 15%)',
                    20: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 20%)',
                    25: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 25%)',
                    30: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 30%)',
                    35: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 35%)',
                    40: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 40%)',
                    45: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 45%)',
                    50: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 50%)',
                    55: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 55%)',
                    60: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 60%)',
                    65: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 65%)',
                    70: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 70%)',
                    75: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 75%)',
                    80: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 80%)',
                    85: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 85%)',
                    90: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 90%)',
                    95: 'color-mix(in srgb, var(--on\\_secondary), var(--secondary) 95%)',
                    100:' var(--secondary)',
        
                },
            }
        }
    }
    
};
