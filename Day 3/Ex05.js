var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "text/html; charset=utf-8",
};

http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.write(`
    <table>
        <tr>
          <th>Нэр</th>
          <th>Нас</th>
          <th>Хүйс</th>
          <th>Статус</th>
        </tr>
        <tr>
          <td>Хатнаа</td>
          <td>20</td>
          <td>ЭР</td>
          <td>Оюутан</td>
        </tr>
        <tr>
          <td>Ээнээ</td>
          <td>25</td>
          <td>ЭМ</td>
          <td>Оюутан</td>
        </tr>
      </table>
    `);
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
