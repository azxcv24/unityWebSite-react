import React, { useContext, useState  } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container } from 'react-bootstrap';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const gameabout = () => {

  return (
    <section id="gameabout">
      <Container>
      <Title title="게임 소개" />
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <h1>메인화면에서 게임시작을 클릭하여 게임을 시작하세요!</h1>
                <h3>로딩 후 게임이 시작됩니다!</h3>
                <p>로그인을 통해 랭킹 등록도 가능합니다!</p>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout1.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout2.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>랭킹을 등록하여 자신의 실력을 비교해보세요!</h1>
                <h3>플레이 시간과 죽은횟수를 랭킹에 등록할수 있습니다 웹사이트에서 회원가입 후 시도해보세요!</h3>
            </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <h1>게임시작후 캐릭터를 움직이세요!</h1>
                <h3>게임캐릭터를 W,A,S,D 버튼을 통해 움직일수 있습니다.!</h3>
                <h3>스페이스바 를 통해 점프 할수 있습니다!</h3>
                <h3>C 버튼을 통해 3인칭으로 바꿀수 있습니다!</h3>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout3.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout4.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>장애물을 피해 목적지에 도달하세요!</h1>
                <h3>다양한 장애물이 플레이어를 기다리고 있습니다!</h3>
                <h3>다가오는 적들을 피해 얼른 달리세요!</h3>
            </div>
        </div>
      </Fade>
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <h1>9공학관 옥상에 있는 헬기에 접근하세요!</h1>
                <h3>플레이어의 원활한 탈출을 위해 헬기가 옥상에서 기다리고 있답니다!</h3>
            </div>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout5.PNG" />
                </div>
            </div>
        </div>
      </Fade> 
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='about-div row mx-auto'>
            <div className='col'>
                <div data-tilt className="thumbnail rounded">
                    <ProjectImg filename="gameabout6.PNG" />
                </div>
            </div>
            <div className='col'>
                <h1>초록 잔디를 믿지 마세요!</h1>
                <h3>플레이어를 맵 밑으로 낙하 시킬 겁니다!</h3>
                <h3>오직 도로, 건물, 장애물, 시설만 믿을 수 있습니다.</h3>
            </div>
        </div>
      </Fade>
      </Container>
    </section>
  );
};

export default gameabout;