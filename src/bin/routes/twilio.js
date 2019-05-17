import { Router } from 'express';

import asyncWrap from './async-route.wrapper';
import SMSReceiver from '../handlers/sms';

const router = Router();

router.post(`/reply`, asyncWrap(SMSReceiver));

export default router;
