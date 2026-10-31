import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";    
import sum from "./sum.js";

const app = express();


app.listen(8000,() => {
    console.log("Server is running on port  3000")
}
)


app.get("/home", (req, res) => {
    res.json({ message: "Welcome to the home page" });
}); 

app.get("/sum/:a/:b", (req, res) => {
    const {a, b} = req.params;
    res.json({ result: sum(parseInt(a), parseInt(b)) });
});