import SmsService from '../services/sms/twilio.service';

async function InviteHandler(req, res) {
  await SmsService.sendSms('8509298352', '7863007263', 'Sup', [
    'https://demo.twilio.com/owl.png',
    'https://cdn-images-1.medium.com/fit/c/120/120/1*yAqDFIFA5F_NXalOJKz4TA.png'
  ]);
  res.send(['Blue', 'Red']);
}

export default InviteHandler;
