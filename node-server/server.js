"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const uuid_1 = require("uuid");
const todos = [];
const requestListener = (req, res) => {
    const headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
        'Content-Type': 'application/json'
    };
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    if (req.url === '/todos' && req.method === 'GET') {
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            'status': 'success',
            'data': todos,
        }));
        res.end();
    }
    else if (req.url === '/todos' && req.method === 'POST') {
        req.on('end', () => {
            try {
                const title = JSON.parse(body).title;
                if (title !== undefined) {
                    const todo = {
                        'title': title,
                        'id': (0, uuid_1.v4)(),
                    };
                    todos.push(todo);
                    res.writeHead(200, headers);
                    res.write(JSON.stringify({
                        'status': 'success',
                        'data': todos,
                    }));
                    res.end();
                }
                else {
                    res.writeHead(400, headers);
                    res.write(JSON.stringify({
                        'status': 'false',
                        'message': '欄位未填寫正確，或無此 todo id',
                    }));
                    res.end();
                }
            }
            catch (error) {
                res.writeHead(400, headers);
                res.write(JSON.stringify({
                    'status': 'false',
                    'message': '欄位未填寫正確，或無此 todo id',
                }));
                res.end();
            }
        });
    }
    else if (req.method === 'OPTIONS') {
        res.writeHead(200, headers);
        res.end();
    }
    else {
        res.writeHead(404, headers);
        res.write(JSON.stringify({
            'status': 'false',
            'message': '無此網站路由',
        }));
        res.end();
    }
};
const server = http_1.default.createServer(requestListener);
server.listen(3005);
