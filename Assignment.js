const express = require('express')

const app = express()

const port = 3000

app.get("/:page", (req, res) => {
    let page = req.params.page
    switch(page) {
        case "home":
            res.send("home")
            break;
        case "about":
            res.send("about")
            break;
        case "info":
            res.send("info")
            break;
    }
  })
