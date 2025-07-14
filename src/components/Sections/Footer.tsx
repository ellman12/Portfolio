import { useEffect, useState } from "react";

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
    "While it is always best to believe in oneself, a little help from others can be a great blessing.",
    "The best way to defeat your enemy is to make them your friend.",
    "Even lessons learned the hard way are lessons learned.",
    "Never put off until tomorrow what can be done today.",
    "You need to let go of the past so you can have a future."
];

export default function Footer() {
    const [shownQuotes, setShownQuotes] = useState<string[]>([]);
    const [quote, setQuote] = useState("");

    useEffect(() => {
        showRandomQuote();
    }, []);

    const showRandomQuote = () => {
        let remainingQuotes = quotes.filter(q => !shownQuotes.includes(q));

        if (remainingQuotes.length === 0) {
            setShownQuotes([]);
            remainingQuotes = quotes;
        }

        const randomQuote = remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
        setQuote(randomQuote);
        setShownQuotes(prev => [...prev, randomQuote]);
    };

    return (
        <footer className="border-t border-slate-400 text-slate-400 p-4 flex flex-col gap-2">
            <p>Made with ❤️ by me</p>
            <p className="cursor-pointer" onClick={showRandomQuote}>
                <i>{quote}</i>
            </p>
        </footer>
    );
}