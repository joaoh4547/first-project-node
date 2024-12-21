import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    console.log(transformed);
    const buf = Buffer.from(String(transformed))
    callback(null, buf);
  }
}

const server = http.createServer(async (req,res) =>{
  const buffers = [];
  for await (const chunk of req){
    buffers.push(chunk);
  }
  const fullStreamContent = Buffer.concat(buffers).toString();
  res.end(fullStreamContent);
  // req.pipe(new InverseNumberStream()).pipe(res)
});
server.listen(3333)