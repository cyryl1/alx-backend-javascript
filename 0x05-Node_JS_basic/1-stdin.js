// Prompt the user to enter their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input on standard input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  
  // If name is provided, display it
  if (name !== null) {
    const trimmedName = name.toString().trim();
    process.stdout.write(`Your name is: ${trimmedName}\n`);
  }
});

// Handle the end of input (Ctrl+D or Ctrl+C)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
