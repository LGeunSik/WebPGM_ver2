9주차 내용입니다.
이벤트-> 사용자
📚 React - Event Handler 정리<br>
1. Event Handler란?<br>
사용자 인터페이스에서 발생하는 이벤트(클릭, 입력 등)에 응답하여 실행되는 함수<br>

DOM 이벤트 vs React 이벤트 구분 필요<br>

2. React에서 이벤트 핸들러 사용법<br>
camelCase로 작성하고, 함수를 직접 전달<br>

jsx
복사
편집
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
<br>
3. 이벤트 객체 사용 (SyntheticEvent)<br>
이벤트 핸들러 첫 번째 매개변수로 SyntheticEvent 객체가 전달됨<br>

event.target.value 등을 통해 입력값 활용 가능<br>

jsx
복사
편집
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
<br>
4. 클래스 컴포넌트에서 이벤트 핸들러<br>
this 바인딩이 필요할 수 있음<br>

class field syntax 또는 bind 사용<br>

jsx
복사
편집
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
<br>
5. 이벤트 핸들러에 인자 전달하기<br>
화살표 함수나 bind 메서드 사용<br>

jsx
복사
편집
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
<br>
6. 이벤트 핸들러에서 상태 변경<br>
useState로 상태를 변경<br>

jsx
복사
편집
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
<br>
7. 기본 이벤트 동작 방지 (preventDefault)<br>
jsx
복사
편집
function FormComponent() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">제출</button>
    </form>
  );
}
<br>
8. 이벤트 전파 중지 (stopPropagation)<br>
jsx
복사
편집
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
  }
  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
<br>
9. 이벤트 핸들러 최적화 (useCallback)<br>
불필요한 핸들러 재생성 방지<br>

jsx
복사
편집
import { useState, useCallback } from "react";
function OptimizedComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
<br>
10. DOM 이벤트 vs React 이벤트 비교<br>

항목	DOM 이벤트	React 이벤트
이벤트 등록	addEventListener	JSX 속성(onClick 등)
이벤트 제거	removeEventListener 필요	컴포넌트 언마운트 시 자동 제거
이벤트 이름	소문자 (click)	카멜케이스 (onClick)
이벤트 객체	네이티브 Event	SyntheticEvent
이벤트 위임	수동 설정	자동 위임(document 관리)
최적화	수동 최적화	useCallback 사용 가능
<br>
11. 실습 예제<br>
클래스 컴포넌트와 함수형 컴포넌트로 ConfirmButton 구현<br>

버튼 클릭 시 "확인됨"으로 상태 변경<br>
