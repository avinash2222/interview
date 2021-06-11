import nodemailer  from 'nodemailer'
import { logger } from './logger'

/**
 * This function sends an email via nodemailer
 * @param {String} to      -> To Email Address
 * @param {String} subject -> Subject of the email
 * @param {String} html    -> HTML to be sent as body or content
 */
const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from    : process.env.EMAIL_ADDRESS,
      to      : to,
      subject : subject,
      html    : html,
    }

    /** Sending the email via transporter */
    await transporter.sendMail(mailOptions)

    logger.info(`Successfully sent email to ${to}`)
  } catch (err) {
    logger.info(`Error while sending email to ${to}`)
    logger.info(err)
    throw err
  }
}



export { sendEmail }
