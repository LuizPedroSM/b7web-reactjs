import React from "react";
import styled from "styled-components";

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalArea = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;

function Modal(props) {
  const handleBackGroundClick = e =>
    e.target === e.currentTarget && props.setVisible(false);

  return (
    <>
      {props.visible && (
        <ModalBackGround onClick={handleBackGroundClick}>
          <ModalArea>{props.children}</ModalArea>
        </ModalBackGround>
      )}
    </>
  );
}

export default Modal;
