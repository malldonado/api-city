import express from "express";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

const server = express();

interface Teste {}

router.get("/", (_, res) => {
  return res.send("Hello World!");
});

router.post("/", (req, res) => {
  console.log(req);
  return res.status(StatusCodes.OK).json(req.body);
});

export { server };
