import React from 'react'
import { useState, useEffect } from 'react';

const textArray: string[] = ['FREE SIPPING ORDER OVER $75',
    'BUY ONLINE + PICK UP IN STORE', 'select “store pick up” at checkout + pick up same day!'
];

function AnounceText() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const animatedText = document.querySelector('#animated-text') as HTMLInputElement;
        const slideInAnimation = animatedText.animate(
            { transform: ['translateX(100%)', 'translateX(0)'], opacity: [0, 1] },
            { duration: 2000, fill: 'forwards', easing: "ease-in-out" }
        );

        slideInAnimation.addEventListener('finish', () => {
            setTimeout(() => {
                const slideOutAnimation = animatedText.animate(
                    { transform: ['translateX(0)', 'translateX(-100%)'], opacity: [1, 0] },
                    { duration: 2000, fill: 'forwards', easing: "ease-in-out" }
                );

                slideOutAnimation.addEventListener('finish', () => {
                    setCurrentIndex((currentIndex + 1) % textArray.length);
                });
            }, 4000);
        });
    }, [currentIndex]);

    return (
        <div >
            <p id="animated-text">{textArray[currentIndex]}</p>
        </div>
    );
}

export default AnounceText;
