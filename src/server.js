"use strict";
const app = require("./app");
const { HOST = "localhost", PORT = 9000 } = require("../config/secrets.json")[
  "server_cred"
];

app.listen(PORT, HOST, () => {
  console.log(`listen on http://${HOST}:${PORT}`);
});
