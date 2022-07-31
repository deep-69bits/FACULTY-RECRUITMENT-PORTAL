import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import multer from "multer"
import nodemailer from 'nodemailer'
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
    post: String,
    email: String,
    aadharcard:String,
    caste:String,
    subcaste: String,
    phonenumber:String,
    address: String,
    pincode: String,
    dob: { type: Date, default: Date.now },
    gender:String
})
const acadmicdata = new mongoose.Schema({
    name: String,
    email: String,
    school10:String,
    board10:String,
    percentage10:String,
    subject10:String,
    yearofpassing10:String,
    school12:String,
    board12:String,
    percentage12:String,
    subject12:String,
    yearofpassing12:String,
    collegebtech:String,
    cgpabtech:String,
    subjectbtech:String,
    yearofpassingbtech:String,
    collegemtech:String,
    cgpamtech:String,
    subjectmtech:String,
    yearofpassingmtech:String
})
const experienedata = new mongoose.Schema({
    name: String,
    email: String,
    designation:String,
    organization:String,
    department:String,
    from:{ type: Date, default: Date.now },
    to:{ type: Date, default: Date.now },
    roles:String,
    emoluments:String,
    employmentsummary:String,
    teachingsummary:String,
    projectsummary:String,
    industrialsummary:String,
    administrativesummary:String
})
const  usersubmitted = new mongoose.Schema({
   
    email: String
})


const Experiencedata = new mongoose.model("Experiencedata ", experienedata)
const Userdata = new mongoose.model("Userdata", userdataSchema)
const Acadmicdata=  new mongoose.model("Acadmicdata", acadmicdata)
const User = new mongoose.model("User", userSchema)
const Usersubmited = new mongoose.model("Usersubmited", usersubmitted)

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
    const { email   } = req.body
    Userdata.findOne({ email: email}, (err, user) => {
        if(user){
             res.send({message: "user found"})
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

var transporter =nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'deepvein1991@gmail.com',
        pass: 'testself'
    }
});

app.post("/finduser2", (req, res)=> {
    const { email   } = req.body
    Usersubmited.findOne({ email: email}, (err, user) => {
        if(user){
             res.send({message: "user found"})
        } else {
            res.send({message: "User not found"})
        }
    })
}) 



app.post("/userdata", (req, res)=> {
    const { name, post, email, aadharcard,caste,subcaste, phonenumber , address,pincode,dob,gender} = req.body
    Userdata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Userdata({
                name,
                post,
                email,
                aadharcard,
                caste,
                subcaste,
                phonenumber,
                address,
                pincode,
                dob,
                gender
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
app.post("/userdatasubmitted", (req, res)=> {
    const {  email } = req.body
    Usersubmited.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd" , id:user.id})
        } else {
              
             
            const user = new Usersubmited({
                email
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    Usersubmited.findOne({'email':email},function(err,data){
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.send( { message: "form filled completely" ,id: data.id })
                            console.log(data.id);
                        }
                    })
                }
            })
        }
    })
    
}) 

app.post("/acadmicdetails", (req, res)=> {
    const { name, email, school10, board10,percentage10,subject10,yearofpassing10
        ,school12,board12,percentage12,subject12,yearofpassing12,
        collegebtech,cgpabtech,subjectbtech,yearofpassingbtech,
        collegemtech,cgpamtech,subjectmtech,yearofpassingmtech } = req.body
    Acadmicdata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Acadmicdata({
                name, email, school10, board10,percentage10,subject10,yearofpassing10
                ,school12,board12,percentage12,subject12,yearofpassing12,
                collegebtech,cgpabtech,subjectbtech,yearofpassingbtech,
                collegemtech,cgpamtech,subjectmtech,yearofpassingmtech
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
    const { name, email, designation,organization,department,from,to,roles,emoluments,employmentsummary
        ,teachingsummary,projectsummary,industrialsummary,administrativesummary  } = req.body
    Experiencedata.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new Experiencedata({
                name, email, designation,organization,department,from,to,roles,emoluments,employmentsummary
                ,teachingsummary,projectsummary,industrialsummary,administrativesummary
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