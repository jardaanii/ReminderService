const sender = require("../config/email-config");

const sendBasicEmail = async (mailfrom, mailto, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      form: mailfrom,
      to: mailto,
      subject: mailSubject,
      text: mailBody,
    });
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
};
