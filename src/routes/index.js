import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Manglar prueba 2" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "MANGLAR prueba 2" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

router.get("/grafica", (req, res) => {
  res.render("grafica", { title: "grafica 1" });
});
export default router;
