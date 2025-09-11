import { sendMail } from "./mail";

function generateOtp () {
    return Math.floor(100000 + Math.random() * (999999-10000)).toString();
}

const otpStroage = new Map()

async function sendOtp(email) {
    const otp = generateOtp()
    otpStroage.set(emaill , otp)
    setTimeout(() => {
        otpStroage.delete(email)
    }, 5*1000);
    try{
        let text = `Welcome to our shop. Your OTP code is ${otp} OTP will expire in 5 minutes`
        const subject = 'OTP'
        let r = await sendMail(email , subject , text)
        if(r) return true
        else return false
    }catch(err) {
        console.log(true)
        return false
    }
}

function verifyOTP(email , otp) {
    const storedOTP = otpStroage.get(email)
    if(storedOTP === otp){
        otpStroage.delete(email)
        return true
    }
    else {
        return false
    }
}

export {sendOtp , verifyOTP}