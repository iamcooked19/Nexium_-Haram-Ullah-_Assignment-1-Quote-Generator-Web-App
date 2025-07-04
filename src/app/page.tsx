"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const quotesData = [
  {
    topic: "motivation",
    quotes: [
      "The only way to do great work is to love what you do. — Steve Jobs",
      "Believe you can and you're halfway there. — Theodore Roosevelt",
      "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
    ],
  },
  {
    topic: "success",
    quotes: [
      "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
      "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
      "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    ],
  },
  {
    topic: "life",
    quotes: [
      "Life is what happens when you're busy making other plans. — John Lennon",
      "In the end, it’s not the years in your life that count. It’s the life in your years. — Abraham Lincoln",
      "Life is either a daring adventure or nothing at all. — Helen Keller",
    ],
  },
];

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    const foundTopic = quotesData.find(
      (item) => item.topic.toLowerCase() === topic.toLowerCase()
    );

    if (foundTopic) {
      setQuotes(foundTopic.quotes);
    } else {
      setError("No quotes found. Try 'motivation', 'success', or 'life'.");
      setQuotes([]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Quote Generator
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., motivation)"
            className="flex-1"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Get Quotes
          </Button>
        </div>
        {error && <p className="mt-2 text-sm text-red-500 text-center">{error}</p>}
      </form>

      {quotes.length > 0 && (
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Quotes about {topic}:
          </h2>
          {quotes.map((quote, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Quote #{index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}