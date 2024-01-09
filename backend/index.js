import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from 'path'
import { error } from "console";



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
    const q = "SELECT * FROM beans ORDER BY coffeeid DESC"; // Order by coffeeid in descending order
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
app.delete("/beans/:id", (req, res) => {
    const coffeeid = req.params.id; // Use the correct parameter name
    const q = "DELETE FROM beans WHERE coffeeid = ?"; // Use the correct column name

    db.query(q, [coffeeid], (error, data) => { // Use the correct variable name
        if (error) return res.json(error); // Use the correct variable name
        return res.json("Beans bean deleted successfully");
    });
});

app.put("/beans/:id", (req, res) => {
    const coffeeid = req.params.id;
    const q = "UPDATE beans SET coffeename = ?, coffeecover = ?, coffeeprice = ? WHERE coffeeid = ?";
    
    const values = [
        req.body.coffeename,
        req.body.coffeecover,
        req.body.coffeeprice,
        coffeeid, // Add the coffeeid for the WHERE clause
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Bean updated successfully");
    });
});




app.listen(8801, ()=>{
    console.log("Connected to backend!")
})