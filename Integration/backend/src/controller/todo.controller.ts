import type {Context} from "hono";
import * as todoModel from "../model/todo.model.ts";

type Todo = {
    id: number;
    name: string;
    success: boolean;
}
const GetTodo = async (c: Context) => {
    try {
        const allTodo = await todoModel.GetTodo();
        return c.json({
            success: true,
            data: allTodo,
            msg: 'All todo!'
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${e}`,
            },
            500
        );
    }
};

const AddTodo = async (c: Context) => {
    try {
        const body = await c.req.json();
        const newName = body.name;
        if (!newName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Pls provide a todo name'
                },
                400
            );
        const newTodo = await todoModel.AddTodo(newName);
        return c.json({
            success: true,
            data: newTodo,
            msg: 'Created new Todo!'
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${e}`,
            },
            500
        );
    }
};

const EditTodoName = async (c: Context) => {
    try {
        const idParam = c.req.param('id');
        const body = await c.req.json();
        const newName = body.name;
        if (!idParam) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Todo ID is required',
                },
                404
            );
        }
        if (!newName) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'New name is required',
                },
                400
            );
        }
        const editedTodo = await todoModel.EditTodo(parseInt(idParam), String(newName));
        return c.json(
            {
                success: true,
                data: editedTodo,
                msg: 'Todo updated successfully',
            });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${e}`,
            },
            500
        );
    }
};

const CompleteTodo = async (c: Context) => {
    try {
        const idParam = c.req.param('id');
        if (!idParam) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Todo ID is required'
                },
                404
            );
        }
        const completedTodo = await todoModel.SuccessTodo(parseInt(idParam));
        return c.json(
            {
                success: true,
                data: completedTodo,
                message: 'Good job'
            })
    } catch (e) {

        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${e}`,
            },
            500
        );
    }
};
const DeleteTodo = async (c: Context) => {
    try {
        const idParam = c.req.param('id');
        if (!idParam) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: 'Todo id is required'
                },
                404
            );
        }
        const deletedTodo = await todoModel.DeleteTodo(parseInt(idParam));

        return c.json(
            {
                success: true,
                message: 'Todo deleted successfully',
                deleted: deletedTodo,
            });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error : ${e}`,
            },
            500
        );
    }
};

export {GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo};
