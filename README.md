# Mini Project
## 배포주소
[https://manduthecat.github.io/javaScript_Quiz/](https://manduthecat.github.io/javaScript_Quiz/)
## 요구사항

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
## 느낀점
* `js`로 `HTML` 만드는 `innerHTML` 사용 vs `createELEMENT` 사용
* `createELEMNET` : 코드가 매우 지저분해 보이게 된다. 하지만 로직을 만들기는 좋다.
* `innerHTML` :코드가 단순해져서 보기 좋지만 삽입된 html 안에서 로직을 돌릴순 없다.
* 로직하나가 망가지면 망가진 부분 부터 진행하지 않는다 (차후 디버깅시 참조)

## 추후 개선
* 빠르게 답을 연속으로 클릭했을때 진행사항이 한번에 올라가는걸 막기.
* 답과 문제가 고정 되어있지 않고 랜덤하게 만들기
