import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function App() {
  const [data, setData] = useState([1, 2]);
  // setData([1, 2, 3, 4]);
  useEffect(() => {
    axios.get("http://localhost:3001/get-data").then((res) => {
      // console.log(res.data);
      const file = res.data;
      let file1 = [];
      const files = res.data.map((e) => {
        file1.push(e);
        setData(res.data);
      });
      // console.log(res.data);
    });
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Table>
        <thead>
          <tr>
            {/* <th>${data[0].id}</th> */}
            <th>{data[0].firstName}</th>
            <th>{data[0].lastName}</th>
            <th>{data[0].email}</th>
            <th>{data[0].email2}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <tr>
                {/* <th>${e.id}</th> */}
                <th>{e.firstName}</th>
                <th>{e.lastName}</th>
                <th>{e.email}</th>
                <th>{e.email2}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
