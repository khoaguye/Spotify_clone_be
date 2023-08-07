import { db } from "../db.js"
export const displayLib = (req, res) =>{
    const q =  "SELECT * FROM lib"
    db.query(q,[req.query], (err,data) =>{
        if (err) return res.send(err)
        return res.status(200).json(data)
    })
}

// export const addLib = (req, res) =>{
//     const q = "SELECT lib.title, lib.author  FROM lib"
//     db.query(q,[req.query], (err,data)=>{
//         if (err) return res.send(err)
//         if(data.length) return res.status(409).json("Song already exists")
//     })

//     const q= "INSERT INTO (`title`,"
//     res.json("this is lib")
// }

export const deleteLib = (req, res) =>{
    res.json("this is lib")
}