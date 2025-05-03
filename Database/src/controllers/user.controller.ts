import type {Context} from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
    firstName: string;
    lastName: string;
};

type updateUserBody = {
    firstName: string;
    lastName: string;
};

const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "firstName or lastName is duplicated",
                }
            );
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        );
        return c.json(
            {
                success: true,
                data: newUser,
                msg: "Created new User!",
            },
            201
        );
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};

const getAllUsers = async (c: Context) => {
    try {
        const users = await userModel.getAllUsers();
        return c.json(
            {
                success: true,
                data: users,
                msg: "Retrieved all users"
            }
        );
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateUserDetails = async (c: Context) => {
    try {
        const id = parseInt(c.req.query("id") || "");
        const body = await c.req.json<updateUserBody>();
        const {firstName, lastName,} = body;

        if (isNaN(id)) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Invalid ID"
                },
                400
            );
        }
        if (!firstName || !lastName) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }
        const userExists = await userModel.getUserById(id);
        if (!userExists) {
            return c.json({
                    success: false,
                    data: null,
                    msg: "User does not exist"
                },
                404
            );
        }

        const updatedUser = await userModel.updateUserDetails(id, firstName, lastName);
        return c.json({
                success: true,
                data: updatedUser,
                msg: "User updated successfully"
            },
            200
        );
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

export {createUser, getAllUsers, updateUserDetails};