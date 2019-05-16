import { Router } from 'express';
import InviteHandler from '../handlers/core';

const wrap = fn => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
const router = Router();

router.get(`/invite`, wrap(InviteHandler));

export default router;
