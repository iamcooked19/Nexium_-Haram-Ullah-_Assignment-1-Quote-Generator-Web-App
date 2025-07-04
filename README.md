# Quote Generator

🚀 A beautiful web app that displays inspirational quotes based on user-selected topics. Built with Next.js and ShadCN UI.

## Features
- Topic-based quote search
- Responsive design
- Modern UI with animated cards
- Easy to extend with new quotes

## Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- ShadCN UI components

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

## Add Your Own Quotes
Edit `src/app/page.tsx` and expand the `quotesData` array:
```typescript
{
  topic: "friendship",
  quotes: [
    "A real friend walks in when others walk out.",
    "Friendship is born at that moment..."
  ]
}
```

## Live Demo
👉 [View on Vercel](https://quote-generator.vercel.app)

## Screenshot
![App Screenshot](/public/screenshot.png)