const express = require("express");

const app = express();

const PORT = process.env.PORT || 7070;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Web App</title>
            <style>
                body {
                    margin: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    background: linear-gradient(135deg, #4f46e5, #06b6d4);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    color: #ffffff;
                }
                .container {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    padding: 40px;
                    border-radius: 18px;
                    text-align: center;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                }
                h1 {
                    font-size: 2.3rem;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 1.1rem;
                    margin-bottom: 25px;
                }
                button {
                    padding: 12px 25px;
                    border: none;
                    background: #ffffff;
                    color: #333;
                    font-size: 1rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: 0.3s ease;
                }
                button:hover {
                    background: #e0e0e0;
                    transform: translateY(-3px);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 My Awesome Web App</h1>
                <p>Hello from a containerized app running inside AWS EC2!</p>
                <button onclick="alert('Button Clicked!')">Click Me</button>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
