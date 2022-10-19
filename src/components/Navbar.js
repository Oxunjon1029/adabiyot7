import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import '../config/styles/navbar.css';
const Navbar = (props) => {
  let currentt = (window.location.href.substr(window.location.href.length - 1, 1))
  const [current, setCurrent] = useState(parseInt(currentt));

  const onChange = page => {
    window.location.href = `/unit${props.children}.${page}`;
    setCurrent(page);
  };
  console.log(props);
  return (
    <div>
      <div className="navbar">
        <Link to='/' className='nav-logo'>MENU</Link>
        <Pagination current={current} onChange={onChange} total={props.total} responsive showSizeChanger={false} />
      </div>
    </div>
  );
};


export default Navbar;