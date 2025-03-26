import express from 'express';
import { createSuppliers, getAllsuppliers, getsuppliersById, updateSuppliers,  deletesuppliers } from "../controllers/suppliersController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/createsupplier", createSuppliers);
router.get("/getAllsuppliers", getAllsuppliers);
router.get("/getsupplierById/:id", getsuppliersById);
router.put("/updatesupplier/:id",  updateSuppliers);
router.delete("/deletesupplier/:id", deletesuppliers);

export default router;