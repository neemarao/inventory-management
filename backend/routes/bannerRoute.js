import express from 'express';
import { createBanner, getAllBanners, getBannerById, updateBanner, deleteBanner } from "../controllers/bannerController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/createbanner", createBanner);
router.get("/getAllbanners", getAllBanners);
router.get("/getbannerById/:id", getBannerById);
router.put("/updatebanner/:id",  updateBanner);
router.delete("/deletebanner/:id", deleteBanner);

export default router;