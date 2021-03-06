import { Router } from 'express';

import asyncWrap from './async-route.wrapper';
import InviteHandler from '../handlers/core';

const router = Router();

router.get(`/invite`, asyncWrap(InviteHandler));

export default router;
