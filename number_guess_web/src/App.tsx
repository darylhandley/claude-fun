import { useState } from 'react'
import './App.css'

function App() {
  const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [gameHistory, setGameHistory] = useState<Array<{guess: number, result: string}>>([])
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const maxAttempts = 7

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const guessNumber = parseInt(guess)
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      alert('Please enter a number between 1 and 100')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    let result = ''
    if (guessNumber === targetNumber) {
      result = 'Correct! 🎉'
      setWon(true)
      setGameOver(true)
    } else if (guessNumber < targetNumber) {
      result = 'Too low!'
    } else {
      result = 'Too high!'
    }

    setGameHistory(prev => [...prev, { guess: guessNumber, result }])
    setGuess('')

    if (newAttempts >= maxAttempts && !won) {
      setGameOver(true)
    }
  }

  const resetGame = () => {
    window.location.reload()
  }

  return (
    <div className="game-container">
      <h1>Number Guessing Game</h1>
      <p>I'm thinking of a number between 1 and 100</p>
      <p>You have {maxAttempts} attempts to guess it!</p>
      
      {!gameOver && (
        <form onSubmit={handleSubmit} className="guess-form">
          <input
            type="number"
            min="1"
            max="100"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess"
            className="guess-input"
            disabled={gameOver}
          />
          <button type="submit" className="guess-button" disabled={gameOver}>
            Guess! (Attempt {attempts + 1}/{maxAttempts})
          </button>
        </form>
      )}

      <div className="game-history">
        {gameHistory.map((entry, index) => (
          <div key={index} className={`history-item ${entry.result.includes('Correct') ? 'correct' : ''}`}>
            <span className="guess-number">{entry.guess}</span>
            <span className="result">{entry.result}</span>
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="game-over">
          {won ? (
            <h2>Congratulations! You won in {attempts} attempts! 🎉</h2>
          ) : (
            <h2>Game Over! The number was {targetNumber} 😔</h2>
          )}
          <button onClick={resetGame} className="play-again-button">
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default App
