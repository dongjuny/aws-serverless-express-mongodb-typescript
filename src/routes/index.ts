import * as Express from "express";
import post from './post'

const router = Express.Router();

router.use('/post', post);

export default router;
