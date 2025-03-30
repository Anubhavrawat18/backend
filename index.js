const express = require("express");
const app = express();

// IMPORTANT
require("dotenv").config();

const port = 3000;
// above is a personal info so such is given in a .env file
// amnd accessed using process.env.<variable name>

const githubData = {
  login: "Anubhavrawat18",
  id: 130166328,
  node_id: "U_kgDOB8IuOA",
  avatar_url: "https://avatars.githubusercontent.com/u/130166328?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Anubhavrawat18",
  html_url: "https://github.com/Anubhavrawat18",
  followers_url: "https://api.github.com/users/Anubhavrawat18/followers",
  following_url:
    "https://api.github.com/users/Anubhavrawat18/following{/other_user}",
  gists_url: "https://api.github.com/users/Anubhavrawat18/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Anubhavrawat18/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Anubhavrawat18/subscriptions",
  organizations_url: "https://api.github.com/users/Anubhavrawat18/orgs",
  repos_url: "https://api.github.com/users/Anubhavrawat18/repos",
  events_url: "https://api.github.com/users/Anubhavrawat18/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Anubhavrawat18/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 4,
  public_gists: 0,
  followers: 1,
  following: 3,
  created_at: "2023-04-07T15:15:20Z",
  updated_at: "2025-03-30T20:27:37Z",
};

app.get("/", (req, res) => {
  res.send("My first backend program!");
});

app.get("/twitter", (req, res) => {
  res.send("twitterUsername");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login at Omnifood</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>Welcome to YouTube</h3>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
// here actually the server will listen at the port 4000 as it is the one specified in the .env file
// and in the listen function we have passed the port number from the .env file
