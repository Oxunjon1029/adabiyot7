import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, CardBody, Card } from "reactstrap";
import { MainData } from "../config/helpers/mainData";
import down from '../config/images/collapse/down.png';
import next from '../config/images/collapse/next.png'
import "../config/styles//home.scss";
const HomeC = () => {
  const [data, setData] = useState([]);
  const makeData = () => {
    let arr = MainData.map((item, index) => {
      return { ...item, id: index, isOpen: false };
    });
    setData([...arr]);
  };
  
  const changeCollapse = (Id) => {
    let arr = [...data];
    if (arr.filter((el) => el.isOpen === true).length === 1) {
      if (arr.find((el) => el.isOpen === true).id !== Id) {
        arr.find((el) => el.isOpen === true).isOpen = false;
      }
    }
    arr.find((el) => el.id === Id).isOpen = !arr[Id].isOpen;
    setData([...arr]);
  };
  useEffect(() => {
    makeData();
  }, []);
  return (
    <div>
      <div className="home-header">
        <a href="./"> MENU</a>
      </div>
      <div className="container">
        <div className="collapse-P">
          {data.length > 0
            ? data.map((item, index) => {
              return (
                <>
                  <button
                    className="button-coll"
                    onClick={() => changeCollapse(item.id)}
                    key={index}
                  >
                    <div className="range">
                      <img key={`${index}img`} src={item.img} alt="error img" />
                    </div>
                    <div key={`${index}unit`} className="text">
                      {item.unit}
                    </div>

                    {item.isOpen ? (
                      <img src={down} alt="" />
                    ) : (
                      <img src={next} alt="" />
                    )}
                  </button>
                  <Collapse isOpen={item?.isOpen} key={`${index}collapse`}>
                    <Card>
                      <CardBody>
                        {item?.lessons?.map((res, Index) => {
                          return (
                            <Link to={res.path} key={Index}>
                              <div className="footer-section1" key={`${Index}link${index}`}>
                                {Index + 1}. {res.lesson}
                              </div>
                            </Link>
                          );
                        })}
                      </CardBody>
                    </Card>
                  </Collapse>
                </>
              );
            })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default HomeC;
