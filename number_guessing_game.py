#!/usr/bin/env python3
import random

def play_game():
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")
    print(f"You have {max_attempts} attempts to guess it.")
    print()
    
    while attempts < max_attempts:
        try:
            guess = int(input(f"Attempt {attempts + 1}/{max_attempts} - Enter your guess: "))
            attempts += 1
            
            if guess < 1 or guess > 100:
                print("Please enter a number between 1 and 100.")
                continue
                
            if guess == number:
                print(f"Congratulations! You guessed it in {attempts} attempts!")
                return True
            elif guess < number:
                print("Too low!")
            else:
                print("Too high!")
                
            remaining = max_attempts - attempts
            if remaining > 0:
                print(f"You have {remaining} attempts left.")
            print()
            
        except ValueError:
            print("Please enter a valid number.")
            continue
    
    print(f"Game over! The number was {number}.")
    return False

def main():
    while True:
        won = play_game()
        
        while True:
            play_again = input("\nWould you like to play again? (y/n): ").lower().strip()
            if play_again in ['y', 'yes']:
                print("\n" + "="*50 + "\n")
                break
            elif play_again in ['n', 'no']:
                print("Thanks for playing!")
                return
            else:
                print("Please enter 'y' for yes or 'n' for no.")

if __name__ == "__main__":
    main()