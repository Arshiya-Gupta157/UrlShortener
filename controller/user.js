const{v4: uuidv4} = require("uuid")
const User = require("../model/userSchema")
const {setUser} = require("../service/auth")

async function userSignUp(req, res) {
    const {name, email, password} = req.body
    if(!name || !email || !password) return res.status(400).json("Fields Missing!!")
    
    const user = await User.create({
        name,
        email,
        password
    })

    return res.redirect("/");
}

async function login(req, res) {
    const {email, password} = req.body
    if(!email || !password) return res.status(400).json("fields missing!!")
    const user = await User.findOne({email, password})
    if(!user) return res.render("login",{error: "Email or password doesnot Found, User doesnot Exist or wrong password!!"});
    
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId)
    return res.redirect("/");
}

module.exports = {
    userSignUp,
    login
}