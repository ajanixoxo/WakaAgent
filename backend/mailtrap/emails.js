import dotenv from "dotenv"
dotenv.config()
import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplate.js"
import { sender, mailtrapClient } from "./mailtrap.config.js"
import  nodemailer  from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: 'jhhbidpksrqcmbku',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
    tls: {
        rejectUnauthorized: false
    }
});
export const sendVerificationEmail = async (email, verificationToken) => {
    console.log("reacched2")
    const emailContent = VERIFICATION_EMAIL_TEMPLATE(verificationToken);
    const mailOptions2 = {
        from: 'joelayomide35@gmail.com',
        to: email,
        subject: 'Your Order',
        html: emailContent,
    };
    console.log(mailOptions2);
    
    try {
        transporter.sendMail(mailOptions2, async (error, info) => {
            if (error) {
                console.error("Error" + error);

            } else {
                console.log("Sent mail")
            }
          
        })
          // const response = await mailtrapClient.testing
            //     .send({
            //         from: sender,
            //         to: recipient,
            //         subject: "Verify your email",
            //         html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            //         category: " Email Verification"
            //     })
            // console.log("Email sent Sucessfully", response)
    }
    catch (error) {
            console.error("Error sending verification", error)
            throw new Error(`Error sending verification email: ${error}`)
        }
    }

export const sendWelcomeEmail = async (email, name) => {
    const emailContent = WELCOME_EMAIL_TEMPLATE(name);
    const mailOptions2 = {
        from: 'joelayomide35@gmail.com',
        to: email,
        subject: 'Your Order',
        html: emailContent,
    };
  

        try {
            transporter.sendMail(mailOptions2, async (error, info) => {
                if (error) {
                    console.error("Error" + error);
    
                } else {
                    console.log("welcome Email sent Sucessfully")
                }
              
            })
            // const response = await mailtrapClient.testing
            //     .send({
            //         from: sender,
            //         to: recipient,
            //         subject: "Succefuly Signed IN",
            //         html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
            //         category: " Welcome"
            //     })
           
        } catch (error) {
            console.error("Error Welcome", error)
            throw new Error(`Error sending Welcome email: ${error}`)
        }
    }
    export const sendPasswordRestEmail = async (email, resetURL) => {
        const recipient = [{ email }]

        try {
            const response = await mailtrapClient.testing
                .send({
                    from: sender,
                    to: recipient,
                    subject: "Rest your passowrd",
                    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
                    category: "Password Rest"
                })
            console.log("Successfuly sent rest password", response)
        } catch (error) {
            console.error("Error ", error)
            throw new Error(`Error sending reset password email: ${error}`)
        }
    }
    export const sendResetSuccessEmail = async (email) => {
        const recipient = [{ email }]

        try {
            const response = await mailtrapClient.testing
                .send({
                    from: sender,
                    to: recipient,
                    subject: "Password Successfully Updated",
                    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
                    category: "Password Updated"
                })
            console.log("Successfuly sent updated password", response)
        } catch (error) {
            console.error("Error ", error)
            throw new Error(`Error sending update password email: ${error}`)
        }
    }