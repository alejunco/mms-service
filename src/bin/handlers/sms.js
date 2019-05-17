import SmsService from '../services/sms/twilio.service';
import Download from '../services/store/store.service';

const MessagingResponse = require('twilio').twiml.MessagingResponse;

async function SMSReceiver(req, res) {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  console.log(req.sid);

  const totalMedia = Number(req.body.NumMedia) || 0;

  const downloadPromises = [];

  for (let i = 0; i < totalMedia; i++) {
    const downloadPromise = Download(
      req.body[`MediaUrl${i}`],
      `storage/${req.body.From}/${Date.now()}.jpeg`,
      function() {
        console.log('done');
      }
    );

    downloadPromises.push(downloadPromise);
  }

  Promise.all(downloadPromises);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
}

export default SMSReceiver;
