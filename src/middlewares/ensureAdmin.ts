import { Request, Response, NextFunction, response } from "express"

export function ensureAdmin(
    request: Request,
    reponse: Response,
    next: NextFunction) {

    const admin = true

    if (admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized",
    })
}