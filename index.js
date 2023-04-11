//import the express module.

const express = require('express')

const bodyParser = require('body-parser')

const mysql = require('mysql');

const session = require('express-session');

const path = require('path');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'first_db'
})

//create express application  using function and refer it to the variable

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

//create route --------------------------------------------------

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/public/pages/login.html')
});

//#########################################################################

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.post('/login', function (request, response) {
    // Capture the input fieldsr
    let useremail = request.body.email;
    let password = request.body.password;
    // Ensure the input fields exists and are not empty
    if (useremail && password) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        connection.query('SELECT * FROM student_login WHERE s_email = ? AND s_password = ?', [useremail, password], function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                // Authenticate the user
                request.session.loggedin = true;
                request.session.s_login = useremail;
                // Redirect to home page
                response.redirect('/dasbord');
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

// app.get('/home', function(request, response) {
//     // If the user is loggedin
//     if (request.session.loggedin) {
//         // Output username
//         response.send('Welcome back, ' + request.session.s_login + '!');
//     } else {
//         // Not logged in
//         response.send('Please login to view this page!');
//     }
//     response.end();
// });

app.get('/dasbord', function (req, res) {
    res.sendFile(__dirname + '/public/pages/dasbord.html')
});



app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
})

//########################################################################

app.get('/registration', function (req, res) {
    res.sendFile(__dirname + '/public/pages/registration.html')
});

// app.get('/kkkk', function(req , res){
//     // res.sendFile(__dirname + '/public/pages/registration.html')
//     res.send("registration is successfull");
// });

// app.post('/post' , function(req , res){
//     res.send("Your registration form submitted successfully");
// })

//--------------------database data----------------------------------


//------------------create connection with database-----------------------------

//  connection.connect(function(error){
//     if(error) throw error
//     console.log("connection is successful");
//  })
// insert data into database------------------------

app.post('/registration', (req, res) => {

    var stdname = req.body.name;

    var stdemail = req.body.email;

    var stdphone = req.body.phone;

    var stdpassword = req.body.password;

    var stdcnfpassword = req.body.cnfpassword;



    insertdata(stdname, stdemail, stdphone, stdpassword, stdcnfpassword);

    //  res.send('name is '+stdname);

    // res.send(window.alert("successful"));

    res.redirect('/login');
});


function insertdata(stdname, stdemail, stdphone, stdpassword, stdcnfpassword) {
    connection.connect(function (error) {
        if (error) throw error
        console.log("connection is successful");

        var sql = "insert into student_login(s_name,s_email,s_phone,s_password,s_cnfpassword) values(?,?,?,?,?)";
        connection.query(sql, [stdname, stdemail, stdphone, stdpassword, stdcnfpassword], function (error) {
            if (error) throw error;
            console.log("data inserted successfully !!")
        });

    });
}


//create a server and start it

app.listen(8000, function () {
    console.log('server is started at port 8000');
});


