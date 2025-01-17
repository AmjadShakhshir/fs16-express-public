import { NextFunction, Request, Response } from "express";

import usersService from "../../services/usersService";
import { ApiError } from "../../middlewares/errors/ApiError";

export function createUser(
    req: Request,
    res: Response,
    next: NextFunction
    ) {
        try {
            const user = usersService.createUser(req.body);
            res.status(201).json({user, message: "User created"});
        } catch (error) {
            next(ApiError.resourceNotFound("Cannot add User"));

        }
}