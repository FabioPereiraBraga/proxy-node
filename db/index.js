const mysql = require('mysql');

const pool = mysql.createPool({
  connectinLimit: 10,
  password: 'root',
  user: 'root', 
  database:'nodedb',
  host: 'db',
  port:'3306'
});

let con = {};

con.all = () =>{

 return new Promise( (resolver, reject)=>{
    pool.query('select *from people', (err, results) => {
        if(err) {
            return reject(err);
        }
        return resolver(results)
    });
    
 })
}

con.create = (name) => {
    return new Promise((resolver, reject)=>{
    pool.query(`INSERT INTO people(name) values(?)`,[name], (err, results) => {
        if(err) {
            throw err;
        }
        return resolver(results)
    });
})
}

module.exports = con;