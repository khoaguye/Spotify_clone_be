import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'spotify123',
    database: 'spotify_db'
})

//Here is how to check if the db is connected
db.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('connect')
    }
})