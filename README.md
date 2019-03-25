# Bus In Carpark Simulator

The application is a simulation of a robot operated bus moving in a carpark.

## Table of contents

- [Quick Start](#quick-start)
- [Examples](#examples)
- [Documentation](#documentation)
   - [Source Code Structure](#source-code-structure)
   - [App Description](#app-description)
   - [App Functionality](#app-functionality)
   - [App Constraints](#app-constraints)

## Quick Start

- Install all project dependencies with `npm install`
- Start the development server with `npm start`
- Start Development Mode with `npm run dev`
- Test test-cases & code coverage with `npm test`
- Build all project source code with `npm run build` 

## Examples

Here is some example input and output:

```
# input 
PLACE 0,0,NORTH
MOVE
REPORT

# output
info: Output: 0,1,NORTH
```

```
# input 
PLACE 0,0,NORTH
LEFT
REPORT

# output
info: Output: 0,0,WEST
```

```
# input 
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

# output
info: Output: 3,3,NORTH
```

## Documentation

### Source Code Structure

```bash
├── README.md
├── LICENSE
├── input.txt (input data)
├── .gitignore
├── .babelrc
├── webpack.config.js
├── package.json 
└── src
      ├── utils
      │   ├── logger.js
      │   ├── file.js
      │   └── file.test.js
      ├── bus 
      │   ├── bus.js
      │   ├── bus.test.js
      │   ├── carpark.js
      │   └── carpark.test.js
      ├── command 
      │   ├── commands.js
      │   ├── commands.test.js
      │   ├── directionInfo.js
      │   ├── constantCommands.js
      │   ├── process.js
      │   └── process.test.js
      ├── test 
      │   ├── integration.test.js
      │   ├── typicalCase.txt
      │   ├── tooManyMoveCommands.txt
      │   ├── commandsWithoutPlaceCase.txt
      │   └── commandsWithoutMoveCase.txt
      └── index.js
```

### App Description

- The application is a simulation of a robot operated bus moving in a carpark, of dimensions 5 units x 5 units.
- There are no other obstructions in the carpark.
- The bus is free to roam around the carpark, but must be prevented from exiting the carpark. Any movement that would result in the bus leaving the carpark must be prevented, however further valid movement commands must still be allowed

### App Functionality

The application should be able to read in any one of the following commands:  

 1. PLACE X,Y,F  
 2. MOVE  
 3. LEFT  
 4. RIGHT  
 5. REPORT

- PLACE will put the bus in the carpark in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the bus is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the bus one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the bus 90 degrees in the specified direction without changing the position of the bus.
- REPORT will announce the X,Y and F of the bus. This can be in any form, but standard output is sufficient.
- A bus that is not in the carpark should ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

### App Constraints

- The bus must not exit the carpark during movement. This also includes the initial
placement of the bus.
- Any move that would cause the bus to exit the carpark must be ignored.