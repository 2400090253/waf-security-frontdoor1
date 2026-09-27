const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Azure Public Portal</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 80px;
        }
        .box {
          max-width: 700px;
          margin: auto;
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 12px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Azure Public Portal</h1>
        <p>This portal is delivered through Azure Front Door.</p>
        <h3>Project Features</h3>
        <p>✓ Global Content Delivery</p>
        <p>✓ Edge Caching</p>
        <p>✓ Web Application Firewall</p>
        <p>✓ HTTPS Security</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Portal running on port ${port}`);
});
