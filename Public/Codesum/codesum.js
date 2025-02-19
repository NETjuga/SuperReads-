
const showcaseData = [
    {
        title: 'Code Generation',
        description: 'Transform your ideas into functional code with detailed explanations and examples.',
        codeExample: `function generateCode(prompt) {
    // Code generation logic
    return transformedCode;
}`
    },
    {
        title: 'Syntax Highlighting',
        description: 'Beautiful syntax highlighting for multiple programming languages using Prism.js',
        codeExample: `const highlightCode = (code, language) => {
    return Prism.highlight(code, Prism.languages[language]);
}`
    },
    {
        title: 'Code Explanation',
        description: 'Get detailed explanations of how the code works and best practices.',
        codeExample: `class CodeExplainer {
    constructor(code) {
        this.code = code;
        this.explanation = '';
    }
    
    analyze() {
        // Code analysis logic
        return this.explanation;
    }
}`
    }
];

let currentSlide = 0;

function updateShowcase() {
    const showcase = document.querySelector('.showcase-text');
    const dots = document.querySelectorAll('.nav-dot');
    
    showcase.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${showcaseData[currentSlide].title}</h2>
        <p class="mb-4">${showcaseData[currentSlide].description}</p>
        <pre><code class="language-javascript">${showcaseData[currentSlide].codeExample}</code></pre>
    `;
    
    Prism.highlightAll();
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateShowcase();
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % showcaseData.length;
        updateShowcase();
    });
    
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + showcaseData.length) % showcaseData.length;
        updateShowcase();
    });
    
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateShowcase();
        });
    });
});
