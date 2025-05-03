import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";
import {todoRouter} from "./todo.route.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUsers);
userRouter.patch("/", userController.updateUserDetails);

export { userRouter };