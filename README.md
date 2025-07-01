¥# Claude Fun

A playground project for experimenting with Claude Code and various development tasks.

## Projects

### 🎲 Number Guessing Game

Implementations of a classic number guessing game in different technologies:

#### 1. Command-Line Version (Python)
- **File**: [`number_guessing_game.py`](./number_guessing_game.py)
- **Language**: Python 3
- **Description**: Interactive terminal-based game where you guess a number between 1-100 with 7 attempts
- **Features**: Input validation, hints (too high/low), play again functionality
- **How to run**:
  ```bash
  python number_guessing_game.py
  ```

#### 2. Web Version (React + TypeScript)
- **Directory**: [`number_guess_web/`](./number_guess_web/)
- **Technologies**: React 18, TypeScript, Vite, CSS3
- **Description**: Browser-based version with modern UI and real-time feedback
- **Features**: Visual guess history, responsive design, dark theme, input validation
- **How to run**:
  ```bash
  cd number_guess_web
  npm install
  npm run dev
  ```
  Then open http://localhost:5173/
- **Documentation**: See [`number_guess_web/README.md`](./number_guess_web/README.md) for detailed setup and features

## Getting Started

1. **Python Environment** (for command-line game):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Web Environment** (for React game):
   ```bash
   cd number_guess_web
   npm install
   ```

## About

This repository was created to explore and test different features and capabilities using Claude Code assistance. Each project demonstrates different programming paradigms and technologies while maintaining the same core game logic.