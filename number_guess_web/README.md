# Number Guessing Game - Web Version

A React TypeScript implementation of the classic number guessing game, playable in your web browser.

## Features

- **Interactive Web Interface**: Clean, responsive design with real-time feedback
- **Game Mechanics**: Guess a random number between 1-100 with 7 attempts
- **Visual Feedback**: Live guess history with color-coded results
- **Input Validation**: Ensures valid number inputs within range
- **Play Again**: Easy restart functionality without page reload

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

## How to Play

1. Enter a number between 1 and 100 in the input field
2. Click "Guess!" to submit your guess
3. Receive feedback: "Too high!", "Too low!", or "Correct!"
4. You have 7 attempts to guess the correct number
5. Win by guessing correctly or lose when attempts run out
6. Click "Play Again" to start a new game

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with modern features

## Project Structure

```
src/
├── App.tsx          # Main game component
├── App.css          # Game styling
├── main.tsx         # React application entry point
└── vite-env.d.ts    # Vite type definitions
```

## About

This is the web version of a command-line number guessing game, built with React and TypeScript for an enhanced user experience in the browser.