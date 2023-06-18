const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express() ;
app.use(express.json());
app.use(cors(
   
));
 const db = mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7626543",
    password: "P7hMFKHT55" ,
    database: "sql7626543"
})
 app.get("/",(req,res)=> {
    const sql = "SELECT * FROM place" ;
    db.query(sql ,(err,data)=> {
        if(err) return res.json("errr" );
        return res.json(data);
    })
}) 
app.post("/creatplace",(req,res) => {
    const sql= "INSERT INTO place(`place_name`,`image`,`description`,`acces`,`transports`,`longitude`,`latitude`,`sortie`,`categorie`,`theme`,`wilaya`) VALUE (?)";
    const value = [
        req.body.placeName,
        req.body.file,
        req.body.Description,
        req.body.openingTime,
        req.body.transportation,
        req.body.longitude,
        req.body.latitude,  
        req.body.closingTime,
        req.body.category,
        req.body.theme,
        req.body.wilaya
    ]
    db.query(sql,[value],(err,data) =>{
       if(err) return res.json("error");
        return res.json(data);
    })
})
app.put("/updateplace/:id",(req,res) => {
    const sql= "update place set  `place_name` = ?,`image` = ?, `description` = ?, `acces` = ?,`transports` = ?,`longitude` = ?,`latitude` = ?,`sortie` = ?,`categorie`= ?,`theme` = ?, `wilaya` = ? where id = ?";
    const value = [
        req.body.placeName,
        req.body.file,
        req.body.Description,
        req.body.openingTime,
        req.body.transportation,
        req.body.longitude,
        req.body.latitude,  
        req.body.closingTime,
        req.body.category,
        req.body.theme,
        req.body.wilaya
    ]
    const id = req.params.id ;
    db.query(sql,[...value, id],(err,data) =>{
       if(err) return res.json("error");
        return res.json(data);
    })
})

app.delete("/place/:id",(req,res) => {
    const sql= "DELETE FROM place  WHERE id = ?";
    
    const id = req.params.id ;
    db.query(sql,[id],(err,data) =>{
       if(err) return res.json("error");
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("Running")
})