import React, { useContext, useState  } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const gameproject = () => {

  return (
    <section id="gameproject">
      <Container>
      <Title title="유니티 게임 프로젝트 소개" />
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <h1>1. 프로젝트 구성</h1>
                <div>
                    <h3>A. 프로젝트간 참고 자료</h3>
                </div>
                
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
        </div>
      </Fade>

      </Container>
      
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='gameproject-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="UnityGame.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>ddddd메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
            </div>
        </div>
      </Fade> 
    </section>
  );
};

export default gameproject;