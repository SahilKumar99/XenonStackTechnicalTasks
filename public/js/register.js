//Register 

const submit =document.getElementById('submitRegisterBTN');


const submitRegister = async(event) =>{
    event.preventDefault();
    const emailregister =document.getElementById('emailregister').value;
    const usernameregister = document.getElementById('usernameregister').value;
    const nameregister = document.getElementById('nameregister').value;
    const passwordregister = document.getElementById('passwordregister').value;

    console.log(emailregister,usernameregister,nameregister,passwordregister)
    const res = await fetch("/registation",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name:nameregister,email:emailregister,username:usernameregister,password:passwordregister
        })
    });
    
    const data = await res.json();

    console.log(data)
    
    if(data.error === 'User Stored'){
        window.alert("Registration Success")
    }
    else {
        window.alert(data.error)
    }
}
submit.addEventListener('click',submitRegister);






