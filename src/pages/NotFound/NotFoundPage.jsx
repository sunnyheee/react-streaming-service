import React from "react";
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>앗! 찾으시는 페이지가 여기에 없네요.</p>
      <p>주소를 잘못 입력하셨거나, 페이지가 이동되었을 수 있습니다.</p>
      <button onClick={() => window.history.back()}>돌아가기</button>
    </div>
  );
};

export default NotFoundPage;
