const sender = require("../config/email-config");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();

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

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, status) => {
  try {
    const response = await repo.update(ticketId, status);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
