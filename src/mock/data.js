import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '2019054 유니티 프로젝트', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: '유니티를 활용한 게임제작 프로젝트', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '유니티로 제작한 ',
  name: '탈출 게임',
  subtitle: '간단하게 그저 탈출만 하면됩니다!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Unitymain.png',
  paragraphOne: '다양한 크로스 플랫폼 지원',
  paragraphTwo: '윈도우, 웹, 안드로이드에서 플레이 할수있습니다! 안드로이드 경우 APK을 다운받고 설치, 윈도우 경우 zip을 압축을 풀고 개임 exe를 실행, 웹 플래이어는 그저 실행 하세요',
  paragraphThree: '아래에서 고른다음 지금 바로 플레이!',
  webgl: 'https://2022unity.two4.de/WebGL/', // if no resume, the button will not show up
  windows: 'Download/windows.zip',
  android: 'Download/game.apk',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'UnityGame.PNG',
    title: 'Unity',
    info: '유니티로 제작한 탈출 게임',
    info2: '유니티를 이용하여 제작한 탈출게임으로 다양하고 ',
    url: 'https://2022unity.two4.de/WebGL/',  //화면상에서 see live로 되어있는 버튼 WebGL 페이지로 연결
    repo: '', //유니티 프로젝트 코드파일 다운로드 링크 해당링크는 비밀번호 파일첨부
  },
  {
    id: nanoid(),
    img: 'apiproject.png',
    title: 'Django',
    info: '장고의 Rest Framework를 활용하여 간단한 API서버를 제작하였습니다.',
    info2: '해당 API는 게임안에서의 랭킹 정보를 제공 및 저장, 회원의 로그인, 회원가입등 다양한 JSON 통신을 위한 서버 프로젝트입니다.',
    url: 'https://2022unity-api.two4.de/', //api사이트로 연결
    repo: 'https://github.com/azxcv24/unityWebSite_django', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'React',
    info: '리엑트를 활용한 간단한 게임 소개 웹사이트',
    info2: '간단한 게임 소개 웹사이트로써 API서버의 회원가입 페이지 및 랭킹 보기등 기능을 제공하며 해당 유니티 게임의 상세 설명을 제공하고자 제작하였습니다.',
    url: 'https://2022unity.two4.de/', //현제 사이트 링크 걸기
    repo: 'https://github.com/azxcv24/unityWebSite-react', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '201905163 - 01분반',
  btn: 'github',
  url: 'https://www.github.com/azxcv24',
};



// FOOTER DATA 바닥
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'Android',
      url: 'Download/game.apk', //APK 다운로드 링크
    },
    {
      id: nanoid(),
      name: 'Windows',
      url: 'Download/windows.zip', //윈도우 빌드 다운로드 링크
    },
    {
      id: nanoid(),
      name: 'WebGL',
      url: 'https://2022unity.two4.de/WebGL/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/azxcv24',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
