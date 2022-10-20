const loginSubmit =document.getElementById('loginSubmit');


const submitLoginData = async(event) =>{
    var loginEmail = document.getElementById('loginemail');
    var loginPassword = document.getElementById('loginpassword');
    event.preventDefault();
    const  email = loginEmail.value
    const  password = loginPassword.value
    const res = await fetch("/signin",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,password
        })
    });
    const data = await res.json();

    if(data.error === 'Login Success'){
        window.alert("Login Success")
    }
    else{
        window.alert("Invalid Details")
    }
}
loginSubmit.addEventListener('click',submitLoginData);


