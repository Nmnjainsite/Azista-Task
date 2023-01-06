import "./App.css";
import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
export default function App() {
  const data = [{ a: 5 }, { b: 3 }, { c: 0 }];

  const [showData, setShowData] = useState(data);
  const [modal, setModal] = useState(false);

  const increment = (keyValue) => {
    let newCountData = showData;
    newCountData = showData.map((ele) =>
      keyValue in ele ? { [keyValue]: ele[keyValue] + 1 } : ele
    );
    setShowData(newCountData);
  };

  const decrement = (keyValue) => {
    let newCountData = showData;
    newCountData = showData.map((ele) =>
      keyValue in ele ? { [keyValue]: ele[keyValue] - 1 } : ele
    );
    setShowData(newCountData);
  };

  return (
    <div className="App">
      {showData.map((el) => {
        return Object.entries(el).map(([key, el]) => (
          <div key={key} className="key">
            <span className="span-items">{key}:</span>{" "}
            <span className="span-items"> {el} </span>
            <button className="btn" onClick={() => increment(key)}>
              +
            </button>
            <button className="btn" onClick={() => decrement(key)}>
              -
            </button>
          </div>
        ));
      })}

      <button
        className="btn-charts"
        onClick={() => setModal((modal) => (modal === false ? true : false))}
      >
        Show Charts
      </button>
      {modal && (
        <div className="modal">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={showData} width={200} height={400}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Bar dataKey="a" fill="#8884d8" />
              <Bar dataKey="b" fill="#82ca9d" />
              <Bar dataKey="c" fill="#ffc658" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
