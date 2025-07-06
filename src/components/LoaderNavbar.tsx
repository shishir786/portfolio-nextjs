import styled from 'styled-components';

const LoaderNavbar = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 38px;
    height: 38px;
    position: relative;
  }

  .box1,
  .box2,
  .box3 {
    border: 5px solid var(--main-color);
    box-sizing: border-box;
    position: absolute;
    display: block;
    border-radius: 6px;
  }

  .box1 {
    width: 38px;
    height: 16px;
    margin-top: 22px;
    margin-left: 0px;
    animation: abox1 4s 1s forwards ease-in-out infinite;
  }

  .box2 {
    width: 16px;
    height: 16px;
    margin-top: 0px;
    margin-left: 0px;
    animation: abox2 4s 1s forwards ease-in-out infinite;
  }

  .box3 {
    width: 16px;
    height: 16px;
    margin-top: 0px;
    margin-left: 22px;
    animation: abox3 4s 1s forwards ease-in-out infinite;
  }

  @media (max-width: 600px) {
    .loader {
      width: 16px;
      height: 16px;
    }
    .box1 {
      width: 16px;
      height: 5px;
      margin-top: 11px;
      border-width: 2px;
    }
    .box2, .box3 {
      width: 5px;
      height: 5px;
      border-width: 2px;
    }
    .box3 {
      margin-left: 11px;
    }
  }

  @keyframes abox1 {
    0% {
      width: 38px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    12.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    25% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    37.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    50% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    62.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
    75% {
      width: 16px;
      height: 38px;
      margin-top: 0px;
      margin-left: 0px;
    }
    87.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    100% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @keyframes abox2 {
    0% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    12.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    25% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    37.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    50% {
      width: 38px;
      height: 16px;
      margin-top: 0px;
      margin-left: 0px;
    }
    62.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
    75% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
    87.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
    100% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
  }

  @keyframes abox3 {
    0% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
    12.5% {
      width: 16px;
      height: 16px;
      margin-top: 0px;
      margin-left: 22px;
    }
    25% {
      width: 16px;
      height: 38px;
      margin-top: 0px;
      margin-left: 22px;
    }
    37.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 22px;
    }
    50% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 22px;
    }
    62.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 22px;
    }
    75% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 22px;
    }
    87.5% {
      width: 16px;
      height: 16px;
      margin-top: 22px;
      margin-left: 22px;
    }
    100% {
      width: 38px;
      height: 16px;
      margin-top: 22px;
      margin-left: 0px;
    }
  }
`;

export default LoaderNavbar;
