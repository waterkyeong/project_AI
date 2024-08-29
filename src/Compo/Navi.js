import React, { useState } from 'react';
import './Navi.css'; // 외부 CSS 파일로 스타일을 정의합니다.
import logo from '../Img/logo.png'; // 이미지 경로 가져오기
import { FaBox, FaShoppingCart, FaCalendarAlt, FaWarehouse } from 'react-icons/fa'; // FontAwesome 아이콘 가져오기

const Navi = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 사이드바의 확장/축소 상태를 변경하는 함수
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        {!isCollapsed && <span className="logo-text">SMARTSHIP</span>} {/* 축소 시 텍스트 숨기기 */}
      </div>
      <ul className={`menu`}>
        <li>
          <FaCalendarAlt className="icon" />
          {!isCollapsed && <span>일정 관리</span>}
        </li>
        <li>
          <FaBox className="icon" />
          {!isCollapsed && <span>선용품 리스트</span>}
        </li>
        <li>
          <FaShoppingCart className="icon" />
          {!isCollapsed && <span>발주 스케줄링</span>}
        </li>
        {/* <li>
          <FaWarehouse className="icon" />
          {!isCollapsed && <span>재고관리(관리자전용)</span>}
        </li> */}
      </ul>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <span className="arrow">{isCollapsed ? '→' : '←'}</span>
      </div>
    </div>
  );
};

export default Navi;
