var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'venkat@471971#',
    
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

con.query("CREATE DATABASE IF NOT EXISTS my_node_database",function(err, result){
if (err) throw err;
console.log("Created my_node_database successfully");
});