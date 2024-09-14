# Knight's Travels

This interactive application allows users to explore the shortest path a knight can take on an 8x8 chessboard from a starting position to a destination using the Breadth-First Search (BFS) algorithm. This project is designed to practice and demonstrate concepts related to graph data structures.

## Screenshot

![](./img/screenshot.png)

## Links

[Live Site](https://mahmoodhashem.github.io/The_Odin_Projects/JavaScript-exercises/knight-travails/index.html)

## Features

- **Interactive Chessboard**: Users can select any position on an 8x8 chessboard as the starting point for the knight.
- **Destination Selection**: Users can choose a destination square for the knight to reach.
- **Shortest Path Calculation**: The application calculates and highlights the shortest path using valid knight moves.
- **Visual Feedback**: The path is visually represented on the board, making it easy to understand the knight's journey.

## How It Works

The project uses the Breadth-First Search (BFS) algorithm to find the shortest path for the knight. The BFS algorithm explores all possible moves from the current position level by level, ensuring that the first time a destination is reached, it’s via the shortest path.

### Knight Moves

The knight moves in an "L" shape:

* Two squares in one direction and one square perpendicular, or
* One square in one direction and two squares perpendicular.

This results in up to 8 possible moves from any given position.

## Technologies Used

* JavaScript, HTML, CSS
