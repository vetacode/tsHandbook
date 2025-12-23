// @noErrors
// @esModuleInterop
import express, { Request, Response } from 'express';
const app = express();

app.get('/', function (req: Request, res: Response) {
  res.sen; //Property 'sen' does not exist on type 'Response<any, Record<string, any>>'. Did you mean 'send'? and it gives type checker code completion/suggestions at runtime
  //
});

app.listen(3000);
