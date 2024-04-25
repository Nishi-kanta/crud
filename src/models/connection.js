const mysql= require('mysql2');

var mysqlconnection=mysql.createConnection({
    host: 'localhost', 
  port: 3306,
  user: 'root', // Provide your MySQL username
  password: 'root', // Provide your MySQL password
  database: 'student',
})

mysqlconnection.connect((error)=>{
     if(error)
     {
         console.log(error+JSON.stringify(error,undefined,2))
     }
     else{
          console.log("mysql DB connection succeed");
     }

})

module.exports=mysqlconnection;