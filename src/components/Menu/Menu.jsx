import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Menu = () => {

  return (
    <section id="Menu">
      <Container>
        <Fade bottom duration={1000} delay={100} distance="30px">
          <div className="about-wrapper">
            <a rel="noopener noreferrer" className="cta-btn text-color-main" href={'#!'}>
              홈
            </a>
            <a rel="noopener noreferrer" className="cta-btn text-color-main" href={'#!'}>
              게임 소계
            </a>
            <a rel="noopener noreferrer" className="cta-btn text-color-main" href={'#!'}>
              게임 프로젝트 설명
            </a>
            <a rel="noopener noreferrer" className="cta-btn text-color-main" href={'#!'}>
              랭킹 보기
            </a>
            <a              
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={'#!'}
            >
              회원가입
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Menu;
