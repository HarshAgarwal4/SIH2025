import mongoose, { mongo } from 'mongoose';

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    fatherName:{
        type: String,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    studentemail:{
        type: String,
        required: true,
        unique: true
    },
    parentEmail:{
        type: String,
        required: true,
        unique: true
    },
    studentContact:{
        required: true,
        type: Number,
        unique: true
    },
    parentContact:{
        required: true, 
        type: Number,
        unique: true
    },
    Paddress:{
        type: String,
        required: true,
        unique: true
    },
    Caddress:{
        type: String,
        required: true,
        unique: true
    },
    DOB:{
        type: Date,
        required: true
    },
    ScoreOf10th:{
        type: Number,
        required: true
    },
    ScoreOf12th:{
        type: Number,
        required: true
    },
    markesheet10th:{
        type: String,
        required: true,
    },
    markesheet12th:{
        type: String,
        required: true,
    },
    appliedCourse:{
        type: String,
        required: true,
    },
    fatherOccupation:{
        type: String,
        required: true, 
    },
    TC:{
        required: true,
        type: String,
    },
    aadharCardNo:{
        required: true,
        type: String,
    },
    aadharCardFile:{
        required: true,
        type: String,
    },
    photo:{
        required: true,
        type: String,
    },
    Hostel:{
        type: Boolean,
        required: true,
    },
    Transport:{
        type: Boolean,
        required: true,
    },
    signature:{
        required: true,
        type: String,
    }
})

const student = mongoose.model('Student' , studentSchema);
export default student;