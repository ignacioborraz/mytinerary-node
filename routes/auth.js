import { Router } from "express";
import passport from "../middlewares/passport.js";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import token from "../controllers/auth/token.js";
import signout from "../controllers/auth/signout.js";
import google from "../controllers/auth/google.js";

import findOrCreate from "../middlewares/findOrCreate.js";
import verifyGoogle from "../middlewares/verifyGoogle.js";
import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existsUser from "../middlewares/existsUser.js";
import validator from "../middlewares/validator.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

let authRouter = Router();

authRouter.post(
  "/register",
  validator(registerSchema),
  existsUser,
  isValidPass,
  register
);
authRouter.post(
  "/signin",
  validator(signinSchema),
  notExistsUser,
  isPassOk,
  isValidToken,
  signin
);
authRouter.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  isValidToken,
  token
);
authRouter.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);
authRouter.post("/google", verifyGoogle, findOrCreate, isValidToken, google);

export default authRouter;
