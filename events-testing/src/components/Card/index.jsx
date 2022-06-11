import { Container } from './styles';

const Card = ({ display }) => {
  function changeColor(e) {
    console.log(e);
  }

  return (
    <Container
      style={{ display: display ? '' : 'none' }}
      onScroll={(e) => changeColor(e)}
    ></Container>
  );
};

export default Card;
