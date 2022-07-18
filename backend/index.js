import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import multer from "multer"
const upload = multer({ dest: 'uploads/' })



const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/facultyportal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phonenumber:String,
    password: String
})

const userdataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phonenumber:String,
    address: String,
    pincode: String,
    dob: { type: Date, default: Date.now }
})
const acadmicdata = new mongoose.Schema({
    name: String,
    email: String,
    degree:String,
    yearofcompition: String,
    marks: String,
    subject: String,
    university:String
})
const experienedata = new mongoose.Schema({
    name: String,
    email: String,
    employment:String,
    teaching: String,
    project: String,
    administrative: String
})

const Experiencedata = new mongoose.model("Experiencedata ", experienedata)
const Userdata = new mongoose.model("Userdata", userdataSchema)
const Acadmicdata=  new mongoose.model("Acadmicdata", acadmicdata)
const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 



app.post("/register", (req, res)=> {
    const { name, email, phonenumber ,password,dob} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                phonenumber,
                password,
                dob
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.post("/finduser", (req, res)=> {
    const { name, email, phonenumber , address,pincode} = req.body
    Userdata.findOne({ email: email}, (err, user) => {
        if(user){
             res.send({message: "user found"})
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 



app.post("/userdata", (req, res)=> {
    const { name, email, phonenumber , address,pincode} = req.body
    Userdata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Userdata({
                name,
                email,
                phonenumber,
                address,
                pincode
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.post("/acadmicdetails", (req, res)=> {
    const { name, email, degree , yearofcompition,marks,subject,university} = req.body
    Acadmicdata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Acadmicdata({
                name,
                email,
                degree,
                yearofcompition,
                marks,
                subject,
                university
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}) 
app.post("/experiencedetails", (req, res)=> {
    const { name, email, employment, teaching ,project,administrative} = req.body
    Experiencedata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Experiencedata({
                name,
                email,
                employment,
                teaching,
                project,
                administrative
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 




app.post('/images', upload.single('image') ,(req,res)=>{
    console.log(req.file)
    if(!req.file){
        res.send({ code:  500 ,msg: 'err'})
    }
    else{
        res.send({ code: 200,msg: "upoload succesfull yeah"})
    }
})




app.listen(9000,() => {
    console.log("BE started at port 9000")
})