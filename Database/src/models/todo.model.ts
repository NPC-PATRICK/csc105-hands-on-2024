import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}

const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            User: true
        },
    });
    return todo;
}

const updateTodoComplete = async (id: number) => {
    const todo = await db.todo.update({
        where: {
           id: id,
        },
        data: {
            completed: true,
        }
    });
    return todo;
}

const getUserTodo = async(id: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: id,
        },
    });
    return todo;
}

const updateTodoTitle = async (id: number, title: string) => {
    const todo = await db.todo.update({
        where:{
            id: id,
        },
        data:{
            title
        },
    });
    return todo;
}

export { createTodo , getTodo, getUserTodo, updateTodoComplete, updateTodoTitle };