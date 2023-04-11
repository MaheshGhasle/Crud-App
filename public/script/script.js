
  // form validation
   function clearErrors(){
    
    errors = document.getElementsByClassName('demo');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    }

function validateform(){

    var val = true;
    
    clearErrors();

    var fName = document.getElementById('f-name').value;
    var fEmail = document.getElementById('f-email').value;
    var fPhone = document.getElementById('f-phone').value;
    var fPassword = document.getElementById('f-password').value;
    var fCnfpassword = document.getElementById('f-cnfpassword').value;



    if(fName.length==""){
        document.getElementById("massage").innerHTML="***Please fill the name***"
           val = false;
        }
    


    if(fName.length<4){
    document.getElementById("massage").innerHTML="***Please fill the name at least four character***"
       val = false;
    }

    if(fEmail==""){
        document.getElementById("massage-1").innerHTML="***Please fill your email***"
           val = false;
        }
    
    
    if(fPhone.length!=10){
        document.getElementById("massage-2").innerHTML="***Please fill the valid number***"
           val = false;
        }

    if(fPassword.length<6){
    document.getElementById("massage-3").innerHTML="***Please fill the password at least six character***"
       val = false;
    }

    // if(fPassword==fCnfpassword){
    //     document.getElementById("massage-4").innerHTML="***Password match***";
    //     document.getElementById("massage-4").style.color="green";
    //      val = false;
    //     }

     if(fPassword!==fCnfpassword){
        document.getElementById("massage-4").innerHTML="***Please fill the same password***"
            val = false;
         }

    if(fCnfpassword==""){
        document.getElementById("massage-4").innerHTML="***Please fill the  password***"
            val = false;
         }
     
    if(fPassword==""){
        document.getElementById("massage-3").innerHTML="***Please fill the  password***"
            val = false;
         }
         return val;


          
}

//--------------------------login page script-------------------------------

function clearErrors1(){
    
    errors = document.getElementsByClassName('demo--4');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    }


function details(){
    var detail1 =document.getElementById('input1').value;
    var detail2 =document.getElementById('input2').value;
     var val = true;

     clearErrors1();

    if(detail1 ==""){
        document.getElementById('demo-1').innerHTML="**Please enter your email address**"
        val = false;
    }
    if(detail2 ==""){
        document.getElementById('demo-2').innerHTML="**Please enter your password**"
        val = false;
    }
    return val;
}

//----------------
var state =false;
        function show(){
            if(state){
                document.getElementById('input2').type='password';
                document.getElementById('pass-icon').style.display ="block";
                document.getElementById('pass-icon1').style.display ="none";
                state=false;
            }else{
                document.getElementById('input2').type='text';
                document.getElementById('pass-icon').style.display ="none";
                document.getElementById('pass-icon1').style.display ="block";
                
                state=true;
            }
        }
//-----------------end login page script--------------------
//end validation code

// function xyz(){
//     var fName = document.getElementById("f-name").value;
//     var fEmail = document.getElementById('f-email').value;
//     var fPhone = document.getElementById('f-phone').value;
//     var fPassword = document.getElementById('f-password').value;
//     var fCnfpassword = document.getElementById('f-cnfpassword').value;

//     document.write(fName);

//     console.log(fEmail);


// }
