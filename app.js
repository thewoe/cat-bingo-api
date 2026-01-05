const fs = require('fs');
// const http = require('http');
const path = require('path');
const express = require('express');
// const { Server } = require('socket.io');
// const cors = require('cors');

const app = express();

app.use(express.json());

const PORT_DATA = 3000; // Express Server Port

async function getCall(req) {
    const filePath = path.join(__dirname, "assets", "cats.json");
    const data = await fs.promises.readFile(filePath, "utf8");
    const json = JSON.parse(data);
    if (!Array.isArray(json)) return [];
    const shuffled = [...json];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

async function getCard(req) {
    const filePath = path.join(__dirname, "assets", "cats.json");
    const data = await fs.promises.readFile(filePath, "utf8");
    const json = JSON.parse(data);
    const cards = json;
    if (!Array.isArray(cards)) return [];
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 16);
};

app.get('/call', async (req, res) => res.json(await getCall(req)));
app.get('/card', async (req, res) => res.json(await getCard(req)));

app.listen(PORT_DATA, () => {
  console.log(`Data server running at http://localhost:${PORT_DATA}`);
});