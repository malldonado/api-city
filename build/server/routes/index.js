"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// import { StatusCodes } from "http-status-codes";
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (_, res) => {
    return res.json({ ok: true });
});
router.get("/cidades", controllers_1.CidadesController.create);
