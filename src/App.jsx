import logo from "./logo.svg";
import "./App.css";
import Odoo from "odoo-react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const read = () => {
  //   odoo.authenticate(function (err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("Connected to Odoo server.");
  //     const params = {
  //       ids: [1, 2, 3, 4, 5],
  //       fields: ["name"],
  //     };
  //     odoo
  //       .read("res.partner", params)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  // };
  // const callBackendAPI = async () => {
  //   const response = await fetch("/event_lists");
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };
  // const [events, setEvents] = useState([]);

  const [userName, setuserName] = useState("admin@project");
  const [password, setpassword] = useState("123");
  const url = "http://141.94.65.215";
  const db = "project_041022";

  const login = async () => {
    // const odoo = new Odoo({
    //   host: url,
    //   port: 8069,
    //   database: db,
    //   username: userName,
    //   password: password,
    // });

    // odoo
    //   .authenticate()
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // try {
    //   const { result } = await axios.post(
    //     "http://141.94.65.215:8069/web/session/authenticate",
    //     {
    //       jsonrpc: "2.0",
    //       params: {
    //         db: "project_041022",
    //         login: "admin@project",
    //         password: "123",
    //       },
    //     }
    //   );
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        jsonrpc: "2.0",
        params: {
          db: "project_041022",
          login: "admin@project",
          password: "123",
        },
      },
    };
    fetch("http://141.94.65.215:8069/web/session/authenticate", requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    // .then((data) => this.setState({ postId: data.id }));
  };

  // useEffect(() => {
  //   // callBackendAPI()
  //   //   .then((res) => {
  //   //     setEvents(res.events);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("ERROR:", err);
  //   //   });
  //   odoo.authenticate(function (err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log("Connected to Odoo server.");
  //     const params = {
  //       ids: [1, 2, 3, 4, 5],
  //       fields: ["name"],
  //     };
  //     odoo
  //       .read("res.partner", params)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  // }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <button onClick={login}>onclick</button>
    </div>
  );
}

export default App;
