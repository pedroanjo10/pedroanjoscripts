<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedro Anjo Scripts</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Pedro Anjo Scripts</h1>
        <button onclick="redirecionar('https://link-target.net/1286322/arceus-neo')">Arceus Neo</button>
        <button onclick="redirecionar('https://link-target.net/1286322/annie-hub')">Annie Hub</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    background-color: cyan;
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    margin-top: 20%;
}

h1 {
    color: white;
}

button {
    background-color: white;
    color: black;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s;
}

button:hover {
    background-color: lightgray;
}
function redirecionar(url) {
    window.location.href = url;
}
