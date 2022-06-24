
6/25 개발 일지
1.아이폰 6s , 8 두가지에서 디바이스 대응을 확인했다. 이제 조금 더 디테일하게 들어가 보자.
2.



6/24 개발 일지 
1.웹 페이지에서 반응형으로 꾸미고 휴대폰 사이즈에 맞게 한번 더 꾸며주기.
=> 미디어 쿼리로 800px에 맞췄는데 내 휴대폰에는 안 맞다. 검색을 통해 괜찮은 페이지를 북마크 해뒀으니 찾아가 한번 더 확인 할것. 각종 기준사이즈들에 맞춰 디자인 해야 한다는 것 명심.

2.모바일에서 개발자 도구를 볼 수 있는 '이루다'라는 패키지를 추가 해 줬다.

3.미디어쿼리 아직 덜했습니다. 반응형으로 꾸며 휴대폰에서도 볼 수 있게 해 주세요.






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


///////////////////////////////////////////////////

RESTful API 규칙

1.URL에는 동사를 사용하지 않는다! (no verb!) 동사는 GET POST PUT DELETE 등

2.URL에는 2가지 종류의 명사가 들어가게 된다. 컬렉션(Collection)과 고유식별자(Unique identifire). 컬렉션은 복수 -s, 식별자는 단수로 활용한다. ex) Movies/thor3

3.이렇게 하면 GET/movies => 영화들을 불러와라 POST/movies =>영화들을 생성해라와 같이 같은 URL과 다른 Method로 구분하기 쉽게 됨. 또한 DELETE와 PUT은 movies와 같이 쓰지 않는다. 모든 영화를 삭제하거나 업데이트 할 일은 없기 때문이다. DELETE/movies/thor3 와 같이 고유식별자를 같이 쓰게 된다.


///////////////////////////////////////////////////

README.md를 잘 써야 멋져보인다.

마크다운 문법을 배워야 하는데 별것 아니긴 하다. 이미 써놨으니 잘 보렴.