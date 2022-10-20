const submitMessage =document.getElementById('submitMessage');


const submitMessageData = async(event) =>{
    var name = document.getElementById('contactname').value;
    var email = document.getElementById('contactEmail').value;
    var message = document.getElementById('contactMessage').value;

    console.log(name,email,message);
    event.preventDefault();
    const res = await fetch("/contactinfo",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name,email,message
        })
    });
    const data = await res.json();

    if(data.error === 'Message Stored'){
        window.alert("Message Stored")
    }
    else{
        window.alert("Failed to store Message")
    }
}
submitMessage.addEventListener('click',submitMessageData);


