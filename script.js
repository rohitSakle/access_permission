"use strict";
const { writeFile, mkdirSync, existsSync } = require("fs");
const { argv } = require("yargs");
const environment = argv.environment;

if (environment === "production") {
  require("dotenv").config({ path: ".env.prod" });
} else if (environment === "development") {
  require("dotenv").config({ path: ".env.dev" });
} else {
  require("dotenv").config({ path: ".env.local" });
}

if (!existsSync("config")) {
  mkdirSync("config", { recursive: true });
}

// DATABASE CONFIGURATION

const dbConfig = {
  [environment]: {
    username: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_NAME"],
    host: process.env["DB_HOST"],
    dialect: process.env["DIALECT"],
  },
};

const secretsVar = {
  ["server_cred"]: {
    HOST: process.env["HOST"],
    PORT: process.env["PORT"],
  },
};

writeFile("config/config.json", JSON.stringify(dbConfig), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database configuration done");
  }
});

writeFile("config/secrets.json", JSON.stringify(secretsVar), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("secret cred configuration done");
  }
});
