import { Container } from './styles';

const Banner = () => {
  function changeColor(e) {
    console.log(e);
  }

  return <Container onScroll={(e) => changeColor(e)}></Container>;
};

export default Banner;
