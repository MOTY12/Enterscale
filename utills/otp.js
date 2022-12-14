const twilio = require("twilio");

let service_sid;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);


//function to send generatedd token to user
const sendOTP = async (phoneNo) => {
    await client.verify.services.create({ friendlyName: 'VMS', codeLength: 4})
    .then(service => service_sid = service.sid)

    const verificationCode = await client.verify.v2.services(service_sid)
    .verifications
    .create({
        to: phoneNo ,
        channel: 'sms',
    })
    return verificationCode;

}


//function to verify token
const verifyToken = async(phoneNo, vCode, service_sid ) => {
    const verificationCode = await client.verify.v2.services(service_sid)
    .verificationChecks
    .create({
        to: phoneNo,
        code: vCode
    })
    return verificationCode;
}


module.exports = {
    sendOTP,
    verifyToken
}

