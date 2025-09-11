import student from "../models/student.js";

async function registerStudent(req,res){
    let {name , fatherName , motherName , studentemail , parentEmail , studentContact , parentContact , Paddress , Caddress , DOB , ScoreOf10th , ScoreOf12th , appliedCourse , fatherOccupation , aadharCardNo , Hostel , Transport} = req.body;
    let obj = {
        name , fatherName , motherName , studentemail , parentEmail , studentContact , parentContact , Paddress , Caddress , DOB , ScoreOf10th , ScoreOf12th , appliedCourse , fatherOccupation , aadharCardNo , Hostel , Transport
    }
    if(!name || !fatherName || !motherName || !studentemail || !parentEmail || !studentContact || !parentContact || !Paddress || !Caddress || !DOB || !ScoreOf10th || !ScoreOf12th || !appliedCourse || !fatherOccupation || !aadharCardNo ){
        return res.send({status:7, msg:"All fields are required"});
    }
    try{
        console.log(obj)
        let s = new student(obj)
        await s.save();
        return res.send({status:1 , msg: "Student registered successfully"});
    }
    catch(err){
        console.log(err);
        return res.send({status:0 , msg: "Error occured while registering student"})
    }
}

export { registerStudent }