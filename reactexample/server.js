const express = require('express');
const path = require('path');

const app = express();

// 리액트 앱의 정적 파일 제공을 위해 build 폴더를 정적 디렉토리로 설정
// app.use(express.static(path.join(__dirname, 'reactexample', 'build')));

app.use(express.static(path.join(__dirname,'build')));


// 모든 요청에 대해 리액트 앱의 index.html 파일을 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'reactexample', 'build', 'index.html'));
});

// 서버를 시작하고 3000번 포트로 들어오는 요청을 수신
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});