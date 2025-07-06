import styled from 'styled-components';

const LoaderProject = () => {
  return (
    <StyledLoaderWrapper>
      <div className="loader">
        <div className="worm" />
        <div className="circleMiddle" />
      </div>
    </StyledLoaderWrapper>
  );
};

const StyledLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  .loader {
    background: linear-gradient(
      90deg,
      #6f22ff,
      #00aaff,
      #2cc92c,
      #00aaff,
      #6f22ff
    );
    background-size: 600% 600%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: neonRotate 10s linear infinite;
    position: relative;
  }
  .circleMiddle {
    background-color: rgb(255, 255, 255);
    width: 66px;
    height: 66px;
    border-radius: 50%;
    z-index: 99;
  }
  .worm {
    position: absolute;
    width: 18px;
    height: 95px;
    background-color: hsl(0, 0%, 100%);
    border-radius: 5px;
    animation: rotateWorm 4s linear infinite;
    z-index: 80;
  }
  @keyframes neonRotate {
    0%,
    100% {
      background-position: 0% 0%;
    }
    25%,
    75% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
  }
  @keyframes rotateWorm {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* Add extra margin below the loader for the text */
  & + .work-in-progress-text, .work-in-progress-text {
    margin-top: 2.2rem !important;
  }
`;

export default LoaderProject;
