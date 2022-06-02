import React, { useContext, useState  } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container } from 'react-bootstrap';
import Title from '../Title/Title';

const rankview = () => {

  return (
    <section id="rankview">
      <Container>
      <Title title="현재 랭크" />
      <Fade bottom duration={1000} delay={800} distance="30px">
        <p>준비중 입니다. 게임 안에서 확인해주세요!</p>
      </Fade>
      </Container>
    </section>
  );
};

export default rankview;