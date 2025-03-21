const showcaseData = [
    {
        image: '/SuperReads-/images/Matchdash.jpg',  // Updated path
        title: 'See what career is best for you',
        description: 'Discover your ideal career path through personality assessment and AI-driven recommendations.'
    },
    {
        image: '/SuperReads-/images/IndTrends.png',  // Updated path
        title: 'Get industry Insights',
        description: 'Get detailed insights about different industries to understand and get knowledge about various jobs.'
    },
    {
        image: '/SuperReads-/images/Oppo.jpg',  // Updated path
        title: 'Opportunity finder',
        description: 'find networking, internship, apprentiship and job opportunities in your area and across the country, with regular updates.'
    },
    {
        image: '/SuperReads-/images/SWGPTFOM.png',  // New custom GPT AI image
        title: 'Academic AI Assistant',
        description: 'Access our custom-made GPT AI designed to help with academic tasks including coding, research, and study assistance.'
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

function nextSlide() {
    currentSlide = (currentSlide + 1) % showcaseData.length;
    updateShowcase();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + showcaseData.length) % showcaseData.length;
    updateShowcase();
}

document.addEventListener('DOMContentLoaded', () => {
    updateShowcase();
    
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', previousSlide);
    
    // Auto-advance slides
    setInterval(nextSlide, 15000);
});
