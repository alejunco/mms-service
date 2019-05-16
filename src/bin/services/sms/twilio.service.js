import Twilio from 'twilio';
import { __param } from 'tslib';

class TwilioService {
  constructor() {
    this.twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    this.twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
    this.twilioApiKey = process.env.TWILIO_API_KEY;
    this.twilioApiSecret = process.env.TWILIO_API_SECRET;

    this.twilioClient = Twilio(this.twilioAccountSid, this.twilioAuthToken);
  }

  /**
   * @param {string} from source phone number, shortcode, or alphanumeric sender ID.
   * @param {string} to destination phone number, shortcode, or alphanumeric sender ID.
   * @param {string} body message content
   * @param {array|undefined} media collection of media to send as SMS
   */
  async sendSms(from, to, body, media) {
    try {
      console.log(`sending to ${to}`);
      return this.twilioClient.messages.create({ from, to, body, mediaUrl: media });
    } catch (error) {
      console.log(error);
    }
  }
}

const instance = new TwilioService();
Object.freeze(instance);

export default instance;
