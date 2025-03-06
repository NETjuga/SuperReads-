const showcaseData = [
    {
        image: '/SuperReads-/images/ChapSS1.jpg',
        title: 'Your Personal Library',
        description: 'Keep track of all your books in one place. Organize your reading list, mark favorites, and set reading goals with our intuitive interface.'
    },
    {
        image: 'images/ChapSS3.jpg',
        title: 'Track Your Reading',
        description: 'Monitor your reading pace, set chapter goals, and maintain a consistent reading schedule. Stay motivated with progress insights and reading streaks.'
    },
    {
        image: 'images/ChapSS2.jpg',
        title: 'Find New Books to Read',
        description: 'Discover your next favorite book through personalized recommendations. Explore new genres, authors, and trending titles based on your reading preferences.'
    },
    {
        image: 'images/ChapSS4.jpg',
        title: 'Capture Your Thoughts',
        description: 'Add personal notes and reflections for each book. Highlight memorable quotes, write chapter summaries, and keep track of your insights as you read.'
    }
];

let currentSlide = 0;

function updateShowcase() {
    const image = document.querySelector('.showcase-image img');
    const title = document.querySelector('.showcase-text h2');
    const description = document.querySelector('.showcase-text p');
    const dots = document.querySelectorAll('.nav-dot');

    image.style.opacity = '0';
    setTimeout(() => {
        image.src = showcaseData[currentSlide].image;
        title.textContent = showcaseData[currentSlide].title;
        description.textContent = showcaseData[currentSlide].description;
        image.style.opacity = '1';
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }, 300);
}

document.querySelectorAll('.nav-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateShowcase();
    });
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % showcaseData.length;
    updateShowcase();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + showcaseData.length) % showcaseData.length;
    updateShowcase();
}

// Comprehensive Image Loading Debugging
document.addEventListener('DOMContentLoaded', () => {
    // Debug current page context
    console.log('Current Page URL:', window.location.href);
    console.log('Current Origin:', window.location.origin);
    console.log('Current Pathname:', window.location.pathname);

    // Log image paths before loading
    showcaseData.forEach((item, index) => {
        console.group(`Image ${index + 1} Debug`);
        console.log('Original Image Path:', item.image);
        
        // Try multiple path variations
        const pathVariations = [
            item.image,
            `/${item.image}`,
            `../images/${item.image.split('/').pop()}`,
            `/SuperReads-/images/${item.image.split('/').pop()}`
        ];

        pathVariations.forEach(path => {
            const img = new Image();
            img.onload = () => {
                console.log(`✅ Image loaded successfully with path: ${path}`);
            };
            img.onerror = (error) => {
                console.error(`❌ Failed to load image with path: ${path}`);
                console.error('Error details:', error);
            };
            img.src = path;
        });
        
        console.groupEnd();
    });

    // Initialize first slide
    updateShowcase();
    
    // Add event listeners for navigation
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', previousSlide);
});

// Optional: Add automatic slideshow
setInterval(nextSlide, 15000); // Changes slide every 5 seconds