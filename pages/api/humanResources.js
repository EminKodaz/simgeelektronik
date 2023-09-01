const sgMail = require("@sendgrid/mail");
require("dotenv").config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { fullName, email, phoneNumber, message } = req.body;
    const messageTemplate = `
    Name: ${fullName}\r\n
    Email: ${email}\r\n
    Phone: ${phoneNumber}\r\n
    Message: ${message}\r\n
    `;
    const msg = {
      from: "simge@simgeelektronik.com.tr",
      subject: "İş Başvurusu",
      text: messageTemplate,
      html: `
      <head>
      <style type="text/css">
          .tg {
              border-collapse: collapse;
              border-spacing: 0;
          }

          .tg td {
              border-color: black;
              border-style: solid;
              border-width: 1px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              overflow: hidden;
              padding: 10px 5px;
              word-break: normal;
          }

          .tg th {
              border-color: black;
              border-style: solid;
              border-width: 1px;
              font-family: Arial, sans-serif;
              font-size: 14px;
              font-weight: normal;
              overflow: hidden;
              padding: 10px 5px;
              word-break: normal;
          }

          .tg .tg-wman {
              border-color: #c0c0c0;
              text-align: center;
              vertical-align: middle
          }

          .tg .tg-asdj {
              border-color: #c0c0c0;
              text-align: left;
              vertical-align: bottom
          }

          .tg .tg-wo29 {
              border-color: #c0c0c0;
              text-align: left;
              vertical-align: top
          }
      </style>
      </head>

      <body>
          <table class="tg" style="table-layout: fixed; width: 428px;">
              <colgroup>
                  <col style="width: 211px">
                  <col style="width: 217px">
              </colgroup>
              <thead>
                  <tr>
                      <th class="tg-wman"><img
                              src="http://cdn.mcauto-images-production.sendgrid.net/829b41fc3c90d163/1ab2fa51-40dc-435c-9423-ffb9c345ef8a/1600x886.png"
                              alt="Simge Group Logo" width="100" height="55"></th>
                      <th class="tg-asdj">İletişim Formu</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="tg-wo29">İsim Soyad :</td>
                      <td class="tg-wo29">${fullName}</td>
                  </tr>
                  <tr>
                      <td class="tg-wo29">E-posta adresi :</td>
                      <td class="tg-wo29">${email}</td>
                  </tr>
                  <tr>
                      <td class="tg-wo29">Telefon :</td>
                      <td class="tg-wo29">${phoneNumber}</td>
                  </tr>
                  <tr>
                      <td class="tg-wo29">Mesaj :</td>
                      <td class="tg-wo29">${message}</td>
                  </tr>
              </tbody>
          </table>
      </body>
      `,
      personalizations: [
        {
          to: "kardelen.kaymakcilar@simgeelektronik.com.tr",
          substitutions: {
            name: "Kardelen Kaymakcilar",
          },
        },
        {
          to: "info@simgeelektronik.com.tr",
          substitutions: {
            name: "Info",
          },
        },
      ],
    };
    try {
      await sgMail.send(msg);
      res.status(200).send({ status: "Success" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ status: "Error" });
    }
  } else {
    res.status(405).send({ status: "Method Not Allowed" });
  }
}
