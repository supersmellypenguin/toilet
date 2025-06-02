const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ua = req.headers["user-agent"] || "";
  const isDiscord = ua.includes("Discordbot");

  if (isDiscord) {
    // Send HTML with OG tags
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <meta property="og:title" content="Cool Emoji" />
        <meta property="og:description" content="Click it!" />
        <meta property="og:image" content="https://cdn.discordapp.com/emojis/1347655143478399048.webp?size=48&name=ted" />
        <meta name="theme-color" content="#7289DA" />
        <title>Preview</title>
      </head>
      <body></body>
      </html>
    `);
  } else {
    // Real person? Redirect instantly
    res.redirect("https://example.com");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
