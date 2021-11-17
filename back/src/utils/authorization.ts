import * as jwt from 'jsonwebtoken';

import { Request, Response } from "express";

export default function Authorize(req: Request, res: Response, next){
        var token = req.headers['x-access-token'];
        //console.log("token",token);
        var msg = {auth: false, message: 'No token provided.'};
        if (!token){
            return res.status(500).json(msg);
        }
        let sec = "secreto";

        jwt.verify(token, sec, function (err, decoded) {
            var msg = {auth: false, message: 'Failed to authenticate token.'};
            if (err){
                return res.status(500).send(msg);
            }
            req.body['id'] = decoded.id;
            next();
        });
    }