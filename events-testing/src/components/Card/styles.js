import styled from 'styled-components';

export const Container = styled.article`
  width: 400px;
  height: 400px;

  box-sizing: border-box;

  display: inline-block;
  margin: 20px;

  background-color: blue;

  animation: slidein 2s ease-in-out;

  @keyframes slidein {
    0% {
      transform: translateY(50px);
      opacity: 0%;
    }

    25% {
      opacity: 25%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 75%;
    }

    100% {
      transform: translateX(500px);
      opacity: 100%;
    }
  }
`;
