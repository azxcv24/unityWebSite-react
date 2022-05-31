import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const signup = () => {
  //const { signup } = useContext(PortfolioContext);
  //const { cta, btn, url } = signup;

  return (
    <section id="signup">
      <Container>
      <Title title="회원가입" />
        <div>
          <a>회원가입</a>
          
        </div>
      </Container>
    </section>
  );
};

export default signup;
