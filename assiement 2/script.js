document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote');

    // Royal Indian Quotes Collection
    const royalQuotes = [
        {
            quote: "A nation's culture resides in the hearts and in the soul of its people.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "The biggest guru-mantra is: Never share your secrets with anybody. It will destroy you.",
            author: "Chanakya"
        },
        {
            quote: "Take up one idea. Make that one idea your life; dream of it, think of it, live on that idea.",
            author: "Swami Vivekananda"
        },
        {
            quote: "You have to dream before your dreams can come true.",
            author: "A. P. J. Abdul Kalam"
        },
        {
            quote: "The only real failure in life is not to be true to the best one knows.",
            author: "Buddha"
        },
        {
            quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            author: "Bhagavad Gita"
        },
        {
            quote: "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions.",
            author: "Chanakya"
        },
        {
            quote: "The world is the great gymnasium where we come to make ourselves strong.",
            author: "Swami Vivekananda"
        },
        {
            quote: "Strength is life, weakness is death.",
            author: "Swami Vivekananda"
        },
        {
            quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
            author: "Mahatma Gandhi"
        }
    ];

    // Generate a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * royalQuotes.length);
        const selectedQuote = royalQuotes[randomIndex];
        
        quoteElement.textContent = `"${selectedQuote.quote}"`;
        authorElement.textContent = `— ${selectedQuote.author}`;
    }

    // Button click event
    newQuoteBtn.addEventListener('click', getRandomQuote);

    // Initial quote load
    getRandomQuote();
});