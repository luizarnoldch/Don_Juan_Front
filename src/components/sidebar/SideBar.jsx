import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.scss'

const SideBarItem = props => {
  const active = props.active ? 'active' : '';
  return (
    <div className="sidebar__item" id={props.title}>
      <div className={`sidebar__item-inner ${active}`} >
        <div className="sidebar__item-inner__icon">
          <i className={props.icon}></i>
        </div>
        <div className="sidebar__item-inner__name">
          <span>
            {props.title}
          </span>
        </div>
      </div>
    </div>
  )
}

const SideBar = props => {

  const sidebar_item = props.items;

  return (
    <div className="sidebar">
      {
        sidebar_item.map((item, index) => (
          <Link to={item.route} key={index}>
            <SideBarItem
              title={item.title}
              icon={item.icon}
              active={item.active}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default SideBar