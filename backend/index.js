import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from 'path'
import multer from 'multer';
import bodyParser from "body-parser";


const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "kaulayaw"
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

// Define storage for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/images")
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});

// Use multer with the defined storage
const upload = multer({ storage: storage });
const adminupload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.json("Hello, this is the backend.");
});

app.get("/beans", (req, res) => {
    const q = "SELECT * FROM beans ORDER BY coffeeid DESC";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// ADMIN 

app.get("/admin_users", (req, res)=>{
    const q = "SELECT * FROM admin_users"
    
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

    
})





// In your Express app
app.post("/admin_users", (req, res) => {
    console.log("Received login request:", req.body);
    const { admin_username, admin_password } = req.body;

    // Check credentials against the admin table in your MySQL database
    const sql = "SELECT * FROM admin_users WHERE username = ? AND password = ?";
    db.query(sql, [admin_username, admin_password], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                res.json({ success: true, message: 'Authentication successful' });
            } else {
                res.json({ success: false, message: 'Invalid credentials' });
            }
        }
    });
});



app.post("/beans", adminupload.single('coffeecover'), (req, res) => {
    console.log('Request Body:', req.body);
    const q = "INSERT INTO beans (`coffeename`, `coffeecover`, `coffeeprice`) VALUES(?)";

    const values = [
        req.body.coffeename,
        req.file ? req.file.filename : null,
        req.body.coffeeprice,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Successfully Executed");
    });
});


app.delete("/beans/:id", (req, res) => {
    const coffeeid = req.params.id;
    const q = "DELETE FROM beans WHERE coffeeid = ?";

    db.query(q, [coffeeid], (error, data) => {
        if (error) return res.json(error);
        return res.json("Beans bean deleted successfully");
    });
});

app.put("/beans/:id", adminupload.single('coffeecover'), (req, res) => {
    const coffeeid = req.params.id;
    const q = "UPDATE beans SET coffeename = ?, coffeecover = ?, coffeeprice = ? WHERE coffeeid = ?";
    
    const values = [
        req.body.coffeename,
        req.file ? req.file.filename : req.body.coffeecover, // Use new image if provided, else use the existing one
        req.body.coffeeprice,
        coffeeid,
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Bean updated successfully");
    });
});


app.listen(8801, () => {
    console.log("Connected to backend!")
});
