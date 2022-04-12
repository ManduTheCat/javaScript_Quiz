# Mini Project
## 배포주소
[https://manduthecat.github.io/javaScript_Quiz/](https://manduthecat.github.io/javaScript_Quiz/)
## 요구사항.

updatePage 함수: 페이지에 있는 문제를 바꿀때 사용된다.

checkAnswer 함수: 사용자의 정답 유무를 확인할때 사용된다. checkAnswer의 마지막에는 updatePage함수가 돌아간다.

1. 메인페이지에서 Play 버튼 누름
2. quiz.html 페이지로 이동되면서, script 태그에 onload를 통해 updatePage() 함수가 돌아감
3. 첫 퀴즈가 나옴
4. 4개의 선택지 중 하나를 고르면 checkAnswer() 함수가 돌아감
5. 정답인지 오답인지 체크하고, 정답이면 Score가 오르고, 오답이면 바뀌지 않는다
6. 1초 후 updatePage() 함수가 돌아간다
7. 마지막에는 몇점을 맞았는지 보여주는 페이지가 나온다항

무조건 위의 로직을 안따라도 되며, 자신만의 로직을 만들어도 됩니다.

구현해야 하는 기능들은 다음과 같습니다.

1. 동작 가능한 퀴즈 버튼
2. 오답 처리 (몇개 맞췄는지)
3. 진행사항을 보여주는 진행도 바 (Progress bar)
