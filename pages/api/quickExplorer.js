const sgMail = require("@sendgrid/mail");
require("dotenv").config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const { fullName, email, phoneNumber } = req.body;
    const messageTemplate = `
    Name: ${fullName}\r\n
    Email: ${email}\r\n
    Phone: ${phoneNumber}\r\n
    `;
    const msg = {
      from: "sendgridsender01@gmail.com",
      subject: "Ücretsiz Keşif Başvurusu",
      text: messageTemplate,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
                  <xml>
                    <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                  </xml>
                  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
              <style type="text/css">
                body {width: 600px;margin: 0 auto;}
                table {border-collapse: collapse;}
                table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
                img {-ms-interpolation-mode: bicubic;}
              </style>
            <![endif]-->
  <style type="text/css">
    body,
    p,
    div {
      font-family: inherit;
      font-size: 14px;
    }

    body {
      color: #000000;
    }

    body a {
      color: #1188E6;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    ul ul ul ul {
      list-style-type: disc !important;
    }

    ol ol {
      list-style-type: lower-roman !important;
    }

    ol ol ol {
      list-style-type: lower-latin !important;
    }

    ol ol ol ol {
      list-style-type: decimal !important;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
  <!--user entered Head Start-->
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Muli', sans-serif;
    }
  </style><!--End Head user entered-->
</head>

<body>
  <center class="wrapper" data-link-color="#1188E6"
    data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
        <tr>
          <td valign="top" bgcolor="#FFFFFF" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0"
              border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
                <center>
                <table><tr><td width="600">
              <![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="width:100%; max-width:600px;" align="center">
                          <tr>
                            <td role="modules-container"
                              style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF"
                              width="100%" align="left">
                              <table class="module preheader preheader-hide" role="module" data-type="preheader"
                                border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p></p>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
                                role="module" data-type="columns" style="padding:30px 20px 30px 20px;" bgcolor="#f6f6f6"
                                data-distribution="1">
                                <tbody>
                                  <tr role="module-content">
                                    <td height="100%" valign="top">
                                      <table width="540"
                                        style="width:540px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;"
                                        cellpadding="0" cellspacing="0" align="left" border="0" bgcolor=""
                                        class="column column-0">
                                        <tbody>
                                          <tr>
                                            <td style="padding:0px;margin:0px;border-spacing:0;">
                                              <table class="module" role="module" data-type="code" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed; margin-bottom: 10px;"
                                                data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e">
                                                <tbody>
                                                  <tr>
                                                    <td height="100%" valign="top" role="module-content">
                                                      <div
                                                        style="background-color: white; border-radius: 15px; width: 100%;">
                                                        <div
                                                          style="width: 100%; padding: 20px 20px 20px 20px;">
                                                          <div
                                                            style="width: 100%; height: fit-content;">
                                                            <h1
                                                              style="font-size: 15px; font-weight: 400; color: #000000">İsim
                                                              : ${fullName}</h1>
                                                            <h1
                                                              style="font-size: 15px; font-weight: 400; color: #000000">Email
                                                              : ${email}
                                                            </h1>
                                                            <h1
                                                              style="font-size: 15px; font-weight: 400; color: #000000">Telefon
                                                              : ${phoneNumber}</h1>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table class="wrapper" role="module" data-type="image" border="0"
                                                cellpadding="0" cellspacing="0" width="100%"
                                                style="table-layout: fixed;"
                                                data-muid="72aac1ba-9036-4a77-b9d5-9a60d9b05cba">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;"
                                                      valign="top" align="center">
                                                      <img class="max-width" border="0"
                                                        style="display:block; border-radius: 15px; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;"
                                                        width="540" alt="" data-proportionally-constrained="true"
                                                        data-responsive="true"
                                                        src="http://cdn.mcauto-images-production.sendgrid.net/829b41fc3c90d163/1ab2fa51-40dc-435c-9423-ffb9c345ef8a/1600x886.png">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>

</html>
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
        {
          to: "kemal.suel@simgeelektronik.com.tr",
          substitutions: {
            name: "Kemal Suel",
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
