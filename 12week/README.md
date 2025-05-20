웹프로그래밍 활용 12주차입니다.
📌 React Todo List 프로젝트 개발 요약<br>
🛠 프로젝트 초기 설정<br>
프로젝트 생성

sql
복사
편집
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add react-icons styled-components
참고 링크: https://react.vlpt.us/mashup-todolist/01-create-components.html<br>

🧱 컴포넌트 구성<br>
컴포넌트	설명
TodoTemplate	전체 레이아웃(중앙 정렬된 흰 박스)
TodoHead	오늘 날짜, 요일, 남은 할 일 개수 표시
TodoList	할 일 목록을 map으로 렌더링
TodoItem	각 할 일 항목, 체크 및 삭제 기능 포함
TodoCreate	새 할 일 추가, 입력 폼 표시/숨김 토글

🎨 스타일 적용<br>
글로벌 스타일 설정: createGlobalStyle 사용

body에 회색 배경 적용

js
복사
편집
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```<br>

---

### 📦 TodoTemplate.js<br>

- 중앙 정렬, 그림자, 흰 배경 박스 생성  
- 내부에 자식 컴포넌트 배치 가능<br>

---

### 🧭 TodoHead.js<br>

- `Date.toLocaleDateString()`로 날짜/요일 표시  
- 완료되지 않은 `todo.done === false` 항목 수 표시<br>

---

### 📝 TodoList.js<br>

- `useTodoState()`를 사용하여 todos 상태 불러오기  
- map으로 각 `TodoItem` 렌더링<br>

---

### ✔ TodoItem.js<br>

- `MdDone`, `MdDelete` 아이콘 사용  
- 완료 시 체크 표시 및 색상 변화  
- 마우스 hover 시 삭제 버튼 표시  
- `useTodoDispatch()`로 토글 및 삭제 구현  
- `React.memo()`로 성능 최적화<br>

---

### ➕ TodoCreate.js<br>

- `useState`로 입력값과 토글 상태 관리  
- `useTodoDispatch()`로 CREATE dispatch  
- `useTodoNextId()`로 고유 id 부여  
- 버튼 클릭 시 폼 토글, `Enter`로 항목 추가<br>

---

### 🧠 상태 관리 - Context API<br>

- `useReducer`로 todos 상태 관리  
- `TodoStateContext`, `TodoDispatchContext`, `TodoNextIdContext` 생성 및 Provider로 감쌈  
- 각각 커스텀 훅(`useTodoState`, `useTodoDispatch`, `useTodoNextId`) 제공  
- Context 외부에서 사용 시 에러 발생하도록 예외 처리 포함<br>

---

### 🧪 기능 구현 정리<br>

- ✅ 할 일 추가: `TodoCreate` 컴포넌트에서 dispatch  
- ✅ 할 일 토글: `TodoItem`에서 onClick → dispatch(TOGGLE)  
- ✅ 할 일 삭제: `TodoItem`에서 onClick → dispatch(REMOVE)  
- ✅ 남은 일 개수: `TodoHead`에서 필터링  
- ✅ 날짜 표시: `toLocaleDateString('ko-KR')` 사용<br>

---

### 📚 참고 자료<br>

- [React 투두리스트 튜토리얼](https://react.vlpt.us/mashup-todolist/01-create-components.html)  
- [위키독스 - React](https://wikidocs.net/197754)  
- [CSS 진화 과정 블로그](https://blog.toycrane.xyz/css%EC%9D%98-%EC%A7%84%ED%99%94-%EA%B3%BC%EC%A0%95-f7c9b4310ff7)  
- [유튜브 강의 영상](https://www.youtube.com/watch?v=_JDeJgsU-bI)  <br>

---

필요하다면 각 컴포넌트별 코드나 커스텀 훅 전체 구조도 따로 정리해줄 수 있어!
