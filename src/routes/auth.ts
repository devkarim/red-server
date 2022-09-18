import express from 'express';

const authRouter = express.Router();

// @route     GET /api/auth/create
// @desc      Create a new account
// @access    Public
authRouter.get('/create', (req, res) => {
  return res.send('register');
});

export default authRouter;
