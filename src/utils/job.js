const cron = require("node-cron");
const sender = require("../config/email-config");
const emailService = require("../services/email-service");

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    // console.log("running a task every two minutes");
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          from: "ReminderService@airline.com",
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });

    // emailService.updateNotification(email.id);

    console.log(response);
  });
};

module.exports = setupJobs;
