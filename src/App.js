import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultC from "./components/DefaultC";
import HomeC from "./components/HomeC";
import { MainData } from "./config/helpers/mainData";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([]);

  const makeData = () => {
    let arr = [];
    MainData.forEach((item) => {
      arr.push(...item.lessons);
    });
    setData([...arr]);
  };

  useEffect(() => {
    makeData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeC} />
          {data.map((item, index) => (
            <Route
              exact
              path={item.path}
              render={() => <DefaultC data={item.data} />}
              key={index}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
