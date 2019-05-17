import SmsService from '../services/sms/twilio.service';

async function InviteHandler(req, res) {
  await SmsService.sendSms(undefined, '7863007263', 'Sup', [
    'https://demo.twilio.com/owl.png',
    'https://blog.mozilla.org/firefox/files/2017/12/firefox-logo-600x619.png'
  ]);
  res.send(['Blue', 'Red']);
}

export default InviteHandler;
