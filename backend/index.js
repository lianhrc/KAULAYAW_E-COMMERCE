import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "845586",
    database: "kaulayaw"
});

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.json("Hello, this is the backend.");
});

app.get("/beans", (req, res) => {
    const q = "SELECT * FROM beans";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/beans", (req, res) => {
    const q = "INSERT INTO beans (`coffeename`, `coffeecover`, `coffeeprice`) VALUES (?, ?, ?)";
    
    // Use placeholders and pass values in an array
    const values = [
        req.body.coffeename,
        req.body.coffeecover,
        req.body.coffeeprice,
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Bean created successfully");
    });
});

app.listen(8801, ()=>{
    console.log("Connected to backend!")
})