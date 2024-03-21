const express = require("express");

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
//   })

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
//   res.json("server running");
  console.log("Running server");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
