자동 배포 프로세스

1.client 폴더로 이동 (cd client)

2.client에 node_modules가 없으니 생성한다. 이 때 package-lock.json에 버전이 명시되어 있기때문에 그 버전에 따라 설치하도록 참고해서 생성한다.(npm ci)

3.react 코드를 브라우저가 이해할 수 있게 JavsScript로 바꾼다.(npm run build)

4.생겨난 build폴더를 server로 옮긴다. (mv 알아보기)

5.server폴더로 이동한다 (cd ../ && cd server)

6.2와 같이 node_modules를 만든다 (npm ci)

7.서버를 실행한다 (node app.js)

*헤로쿠는 pakage.json을 참조해서 npm run start를 해준다.

8.루트경로(현재는 REACT_PROJ)로 이동해서 npm run start 스크립트를 작성 해 주자. (cd ../ && npm init)

9.만들어진 루트 경로의 package.json에 'scripts' 안 start에 차곡차곡 스크립트를 작성 해 주면 된다. 헤로쿠에서는 60초안에 모든 작업을 마치고 7번 코드를 실행해야 하는데 60초가 넘어버리는 경우에는 start명령 앞에 heroku-prebuild안에 작성하면 미리 실행을 시켜준다. 만약 여유가 없다면 1~4를 prebuild에 넣어둘것.

*cd client && cd server => '&&'는 앞에 스크립트 후 다음 작업이라는 뜻.

10.github에 push한 repository를 헤로쿠에 올릴거기 떄문에 github로 업로드.
