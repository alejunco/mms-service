import Twilio from 'twilio';

class TwilioService {
  constructor() {
    this.twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    this.twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    this.twilioTestPhoneNumber = process.env.TWILIO_TEST_GENERIC_PHONE_NUMBER;

    this.twilioClient = Twilio(this.twilioAccountSid, this.twilioAuthToken);
  }

  /**
   * @param {string} from source phone number, shortcode, or alphanumeric sender ID.
   * @param {string} to destination phone number, shortcode, or alphanumeric sender ID.
   * @param {string} body message content
   * @param {array|undefined} media collection of media to send as SMS
   */
  async sendSms(from = this.twilioTestPhoneNumber, to, body, media) {
    try {
      console.log(`sending to ${to}`);
      return this.twilioClient.messages.create({ from, to, body, mediaUrl: media });
    } catch (error) {
      console.log(error);
    }
  }

  async receiveSms(request, h) {
    try {
      const conversation = await Conversation.loadByPhoneNumber(request.payload.To);
      const senderInfo = { phoneNumber: request.payload.From };
      const twilioInboundSmsPayload = request.payload;

      await conversation.sendMessage(twilioInboundSmsPayload.Body, { senderInfo });
    } catch (error) {
      captureException(error);
    }
  }
}

const instance = new TwilioService();
Object.freeze(instance);

export default instance;
