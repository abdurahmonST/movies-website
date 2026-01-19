import styled from "styled-components";

export const MovieContainer = styled.div`
  position: relative;
  height: 296px;
  width: 208px;
  border-radius: 12px;
  background-color: red;
  cursor: pointer;
  overflow: hidden;

  img {
    margin: 20px;
    height: 24px;
    width: 24px;
    background-color: green;
    padding: 16px;
    border: 2px solid gray;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 16px;

    display: flex;
    flex-direction: column;
    gap: 2px;

    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }

  &:hover .content {
    opacity: 1;
    transform: translateY(0);
  }
`;


