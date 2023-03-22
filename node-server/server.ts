import http from 'http';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  title: string;
  id: string;
}

const todos: Todo[] = [];

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
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
  } else if (req.url === '/todos' && req.method === 'POST') {
    req.on('end', () => {
      try {
        const title = JSON.parse(body).title;

        if (title !== undefined) {
          const todo: Todo = {
            'title': title,
            'id': uuidv4(),
          };
          todos.push(todo);
          res.writeHead(200, headers);
          res.write(JSON.stringify({
            'status': 'success',
            'data': todos,
          }));
          res.end();
        } else {
          res.writeHead(400, headers);
          res.write(JSON.stringify({
            'status': 'false',
            'message': '欄位未填寫正確，或無此 todo id',
          }));
          res.end();
        }
      } catch (error) {
        res.writeHead(400, headers);
        res.write(JSON.stringify({
          'status': 'false',
          'message': '欄位未填寫正確，或無此 todo id',
        }));
        res.end();
      }
    });
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(JSON.stringify({
      'status': 'false',
      'message': '無此網站路由',
    }));
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(3005);