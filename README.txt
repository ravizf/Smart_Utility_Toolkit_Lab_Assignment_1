SMART UTILITY TOOLKIT
Lab Assignment 1 – Web Dev III (Node.js & Express Backend)

Requirements:
- Node.js installed
- No npm packages are required
- Uses only Node.js built-in modules

FILES:
calculator.js   -> CLI calculator using process.argv
isEven.js       -> Custom module
moduleDemo.js   -> Reuses isEven.js
server.js       -> HTTP server with routes
fileManager.js  -> File CRUD operations using fs
dice.js         -> Random dice generator using crypto

RUN COMMANDS:

1. CLI Calculator
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5

2. Custom Module
node moduleDemo.js

3. HTTP Server
node server.js

Then open:
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/invalid

4. File Manager
node fileManager.js

5. Dice Generator
node dice.js

NOTE:
sample.txt is created, read, updated, and deleted automatically by fileManager.js.
