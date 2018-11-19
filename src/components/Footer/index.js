import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'
class Footer extends Component {
  render() {
    return (
      <ul className="elm-foot">
        <li>
          <NavLink to="/pages/Home/Home" exact>
            <i className="iconfont icon-ditu"></i>
            <span>首页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Discover/Discover">
            <i className="iconfont icon-anquan"></i>
            <span>发现</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Order/Order">
            <i className="iconfont icon-zhaoxiang"></i>
            <span>订单</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pages/Mine/Mine">
            <i className="iconfont icon-Dyanjing"></i>
            <span>我的</span>
          </NavLink>
        </li>
      </ul>
    )
  }
}


export default Footer;
