// pages/api/game.js

let currentGameState = {
  cells: [],
  generation: 0,
};

export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.action === "start") {
      // Initialize the game state
      const { rows, cols } = req.body;
      currentGameState.cells = Array.from({ length: rows }, () =>
        Array(cols).fill(0)
      );
      currentGameState.generation = 0;
      return res.status(200).json(currentGameState);
    } else if (req.body.action === "step") {
      // Calculate the next generation
      currentGameState = calculateNextGeneration(currentGameState);
      return res.status(200).json(currentGameState);
    } else if (req.body.action === "reset") {
      // Reset the game state
      currentGameState.cells = [];
      currentGameState.generation = 0;
      return res.status(200).json(currentGameState);
    }
  } else if (req.method === "GET") {
    // Return the current game state
    return res.status(200).json(currentGameState);
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}

// Function to calculate the next generation based on the rules of the Game of Life
function calculateNextGeneration(gameState) {
  // Implement the logic for the Game of Life here
  // ...
  return gameState; // return the updated state
}
