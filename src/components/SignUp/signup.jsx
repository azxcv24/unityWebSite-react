import React, { useContext, useState  } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
//import signuppost from './signupPOST';
import axios from 'axios';

const signup = () => {

  const [inputs, setInputs] = useState({
    useremail: "",
    userpasswd: "",
    usernick: "",
    username: ""
  })

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  
  const postOnClick = async() =>{
    console.log("회원가입 버튼 호출");
    try {
      //응답 성공 
      const response = await axios.post('https://2022unity-api.two4.de/user/signup/',{
          email: inputs.useremail,
          password: inputs.userpasswd,
          nickname: inputs.usernick,
          name: inputs.username
      });
      console.log(response);
      alert("회원가입 완료! 게임에서 로그인 할 수 있습니다!");
      window.location.href = '/';
    } catch (error) {
      //응답 실패
      console.error(error);
      alert("회원가입 실패!" + error);
    }
  }


  return (
    <section id="signup">
      <Container>
      <Title title="회원가입" />
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className='input-form mx-auto'>
          <form>
            <div className='form-group'>
              <h3>이메일</h3>
              <input className='mx-4 form-control form-control-lg' type="email" placeholder="Enter email" name='useremail' onChange={handleOnChange}></input>
            </div>
            <div className='form-group'>
              <h3>비밀번호</h3>
              <input className='mx-4 form-control form-control-lg' type="password" placeholder="Enter password" name='userpasswd' onChange={handleOnChange}></input>
            </div>
            <div className='form-group'>
              <h3>닉네임</h3>
              <input className='mx-4 form-control form-control-lg' type="text" placeholder="Enter NickName" name='usernick' onChange={handleOnChange}></input>
            </div>
            <div className='form-group'>
              <h3>이름</h3>
              <input className='mx-4 form-control form-control-lg' type="text" placeholder="Enter Name" name='username' onChange={handleOnChange}></input>
            </div>
            <div className='form-group'>
              <Button className='mp-5 cta-btn cta-btn--hero' onClick={postOnClick}>회원 가입</Button>
            </div>
          </form>
        </div>
      </Fade>
      </Container>
    </section>
  );
};

export default signup;
