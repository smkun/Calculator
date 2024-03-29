# Calculator Project

This project is a simple web-based calculator that allows users to perform basic arithmetic operations. It's designed with a modern and intuitive interface, leveraging HTML, CSS, and JavaScript for functionality and aesthetics.

## Features

-   Basic arithmetic operations: addition, subtraction, multiplication, and division.
-   Clear input field with a single click.
-   Visually appealing design with dynamic background changes for buttons upon interaction.

## How It Works

The calculator is implemented using standard web technologies: HTML, CSS, and JavaScript.

### HTML

Defines the structure of the calculator, including the display area for input and results, and buttons for digits, operations, and functions like clear and erase.

### CSS

Styles the calculator to improve usability and visual appeal. It includes styles for the calculator container, button grid, and responsive design elements. Special attention is given to button states to enhance user interaction.

### JavaScript

Handles the logic for arithmetic operations, input handling, and dynamic changes to button appearances. Key components include:

-   **Operation Logic**: Uses the `eval()` function to compute the result based on the user's input.
-   **Error Handling**: Displays "Invalid expression" directly in the input field for invalid operations, reverting back to the original input after a short delay.
-   **Dynamic UI Feedback**: Changes button backgrounds and text colors on interaction, reverting back after a brief moment.

## Setup and Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to start using the calculator.
3. Perform calculations by clicking on the digit and operation buttons, and view the results in the display area.
