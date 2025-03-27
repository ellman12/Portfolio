import {useState} from "react";

const quotes = [
    "No one gets through life alone.",
    "It's not about winning, it's about fun!",
    "Today is the tomorrow you worried about yesterday.",
    "We suffer more often in imagination than in reality.",
    "It is not that we have a short time to live, but that we waste a lot of it.",
    "It's not what happens to you, but how you react to it that matters.",
    "Our thoughts make us what we are.",
    "People rarely succeed unless they have fun in what they are doing.",
    "You have power over your mind, not outside events. Realize this, and you will find strength.",
    "If you believe in yourself, and with a tiny pinch of magic, all your dreams can come true!",
    "Life happens wherever you are, whether you make it or not.",
    "The inner machinations of my mind are an enigma...",
    "While it is always best to believe in oneself, a little help from others can be a great blessing."
];

export default function Footer() {
    const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

    const getRandomQuote = () => {
        let newQuote = quote;

        while (newQuote === quote)
            newQuote = quotes[getRandomIndex()];

        setQuote(newQuote);
    };

    const [quote, setQuote] = useState(quotes[getRandomIndex()]);

    return (
        <footer className="border-t border-slate-400 text-slate-400 p-4 flex flex-col gap-2">
            <p>Made with ❤️ by me</p>
            <p className="cursor-pointer" onClick={getRandomQuote}>
                <i>{quote}</i>
            </p>
        </footer>
    );
}
