import React, {useState, useEffect} from "react";
import axios from "axios";
import "../App.scss";
import Rewards from "./rewards/reward";

export default function App() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
    .get("./data.json")
    .then((res) => setCustomers(res.data))
    .catch(err=>console.log(err))
  },[]);

  return (
    <div className="App">
      <Rewards customers={customers} ></Rewards>
    </div>
  );
}