import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, testUser, testUser1 } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImages",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/test").get(verifyJWT,testUser)
router.route("/test1").get(verifyJWT,testUser1)

router.route("/refresh-token").post(refreshAccessToken)


export default router;
