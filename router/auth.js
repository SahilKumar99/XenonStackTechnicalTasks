const express = require('express');

const router = express.Router();

router.get("",(req,res)=>{
    res.render('index');
})


router.get("/login",(req,res)=>{
    res.render('login');
})
router.get("/register",(req,res)=>{
    res.render('register');
})
router.get("/contact",(req,res)=>{
    res.render('contact');
})
router.get("*",(req,res)=>{
    res.render('404');
})


require('../db/connection');
const User = require('../model/userSchema')
const Message = require('../model/messageSchema')

// router.post('/registation', async (req,res)=>{

//     const {name,email,username,password} = req.body
//     console.log(name);
//     console.log(email);
    
//     if(!name || !email || !username || !password){
//         return res.status(422).json({
//             error: "Empty Fields"
//         })
//     }

//     User.findOne({email:email})
//     .then((userExists) =>{
//         if(userExists){
//             return res.status(422).json({
//                 error: "User Already Exists"
//             })
//         }

//         const user = new User({
//             name,
//             email,
//             username,
//             password
//         });

//         user.save().then(() =>{
//             return res.status(201).json({
//                 error: "User Stored"
//             })
//         }).catch((error)=>{
//             return res.status(500).json({
//                 error: "Failed to Register"
//             })
//         })
//     }).catch((error) =>{
//         console.log(error)
//     })
// })

router.post('/contactinfo', async (req,res)=>{

    const {name,email,message} = req.body
    console.log(name);
    console.log(email);
    console.log(message);
    
    if(!name || !email || !message){
        return res.status(422).json({
            error: "Empty Fields"
        })
    }
    try{
        
        const messages = new Message({name,email,message});

        const messagesave = await messages.save();

        if(messagesave){
            return res.status(201).json({
                error: "Message Stored"
            })
        }
        else{
            return res.status(500).json({
                error: "Failed to store Message"
            })
        }
    }
    catch(error){
        console.log(error)
    }
})


router.post('/registation', async (req,res)=>{

    const {name,email,username,password} = req.body
    console.log(name);
    console.log(email);
    
    if(!name || !email || !username || !password){
        return res.status(422).json({
            error: "Empty Fields"
        })
    }
    try{
        const userExists =  await User.findOne({email:email});
        if(userExists){
            return res.status(422).json({
                error: "User Already Exists"
            })
        }
        const user = new User({name,email,username,password});

        const usersave = await user.save();

        if(usersave){
            return res.status(201).json({
                error: "User Stored"
            })
        }
        else{
            return res.status(500).json({
                error: "Failed to Register"
            })
        }
    }
    catch(error){
        console.log(error)
    }
})

router.post('/signin', async (req,res)=>{

    const {email,password} = req.body
    console.log(email);
    console.log(password);
    
    if(!email || !password){
        return res.status(422).json({
            error: "Empty Fields"
        })
    }
    try{
        const userExists =  await User.findOne({email:email});
        if(userExists){
            if(password === userExists.password){
                return res.status(422).json({
                    error: "Login Success"
                })
            }
            else{
                return res.status(201).json({
                    error: "Invalid Credentials"
                })
            }
        }
        else{
            return res.status(201).json({
                error: "Invalid Credentials"
            })
        }
        
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router