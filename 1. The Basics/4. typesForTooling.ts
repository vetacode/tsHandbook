// @noErrors
// @esModuleInterop
import express, { Request, Response } from 'express';
const app = express();

app.get('/', function (req: Request, res: Response) {
  res.sen; //Property 'sen' does not exist on type 'Response<any, Record<string, any>>'. Did you mean 'send'?
  //
});

app.listen(3000);
