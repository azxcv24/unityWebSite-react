import axios from 'axios'; // 액시오스

export async function signupPostData(inputemail, inputpasswd, inputnick, inputname) {
  try {
    //응답 성공 
    const response = await axios.post('https://2022unity-api.two4.de/user/signup',{
        email: inputemail,
        password: inputpasswd,
        nickname: inputnick,
        name: inputname
    });
    console.log(response);
    alert("회원가입 완료! 게임에서 로그인 할 수 있습니다!");
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}