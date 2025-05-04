import { Hono } from "hono";
import * as todoController from '../controller/todo.controller.ts';


const todoRouter = new Hono();

todoRouter.get("/", todoController.GetTodo);
todoRouter.patch("/:id", todoController.EditTodoName );
todoRouter.patch("/:id/complete", todoController.CompleteTodo );
todoRouter.post("/", todoController.AddTodo);
todoRouter.delete("/:id", todoController.DeleteTodo);

export { todoRouter };
