const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calculate', (req, res) => {
    const Ptx = parseFloat(req.body.Ptx);
    const freq = parseFloat(req.body.freq);
    const distance = parseFloat(req.body.distance);
    const wallLosses = req.body.wallLosses
        .split(',')
        .map(x => parseFloat(x.trim()))
        .reduce((a, b) => a + b, 0);

    const d_km = distance / 1000;
    const fspl = 20 * Math.log10(d_km) + 20 * Math.log10(freq) + 32.44;
    const rssi = Ptx - fspl - wallLosses;

    // Read result.html template and replace {{data}}
    let html = fs.readFileSync(path.join(__dirname, 'views', 'result.html'), 'utf-8');
    html = html.replace("{{data}}", JSON.stringify({
        Ptx, freq, distance, wallLosses, fspl: fspl.toFixed(2), rssi: rssi.toFixed(2)
    }));

    res.send(html);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
