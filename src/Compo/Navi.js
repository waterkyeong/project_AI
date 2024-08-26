import React, { useState } from 'react';
import './Navi.css'; // 외부 CSS 파일로 스타일을 정의합니다.

const Navi = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 사이드바의 확장/축소 상태를 변경하는 함수
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">LOGO</div>
      <ul className={`menu ${isCollapsed ? 'hidden' : ''}`}>
        <li>물건 선택</li>
        <li>장바구니</li>
        <li>스케줄링</li>
        <li>재고관리(관리자전용)</li>
      </ul>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <span className="arrow">{isCollapsed ? '→' : '←'}</span>
      </div>
    </div>
  );
};

export default Navi;
