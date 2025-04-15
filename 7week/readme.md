7주차 내용입니다.<br>
중요 내용<br>
useEffect 4가지 조건 
처음 한 번만 실행 useEffect(() => {...}, []) 마운트 시 실행, 언마운트 시 정리<br>
특정 상태가 변경될 때 실행 useEffect(() => {...}, [state]) state 값이 바뀔 때 실행<br>
매 렌더링마다 실행 useEffect(() => {...}) 의존성 배열이 없으면 렌더링마다 실행<br>
언마운트 시 실행 useEffect(() => { return () => {...}; }, []) 컴포넌트가 제거될 때 실행<br>


API 호출
fetch("URL")/ <li key>
data 가져오기  

use memo

useCallback()
-> 함수 메모이제이션 제공

useref()
특정 컴포넌트에 접근 가능

hook
최상위 컴포넌트에서만 호출






<br>

🌟 React Hooks 요약 정리<br>
📌 Hooks란?<br>
함수형 컴포넌트에서 **상태(state)**와 라이프사이클(lifecycle) 기능을 사용할 수 있게 해주는 기능<br>

기존에는 클래스형 컴포넌트에서만 가능했지만, Hook 도입으로 함수형에서도 사용 가능해짐<br>

모든 Hook은 use 로 시작해야 함<br>

코드를 간결하고 재사용 가능하게 만들어줌<br><br>

🔹 useState()<br>
컴포넌트 내에서 상태 관리를 위한 Hook<br>

const [state, setState] = useState(초기값) 형태로 사용<br>

✅ 특징
상태 변경 함수 setState를 통해 값 갱신<br>

비동기 특성이 있음 (변경 즉시 반영 X)<br>

배열, 객체도 관리 가능<br>

✅ 예시
jsx
복사
편집
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>클릭</button>
<br>
🔹 useEffect()<br>
컴포넌트가 렌더링될 때 부수 효과(side effect) 를 수행<br>

데이터 요청, 이벤트 등록, 타이머 설정 등에 사용<br>

✅ 문법
jsx
복사
편집
useEffect(() => {
  // 실행될 코드
  return () => {
    // cleanup 코드 (언마운트 시)
  };
}, [의존성 배열]);
✅ 주요 케이스
[]: 마운트/언마운트 시 한 번 실행<br>

[state]: 해당 state가 변경될 때 실행<br>

없음: 매 렌더링마다 실행<br>

<br>
🔹 useMemo()<br>
연산 비용이 큰 계산 결과를 메모이제이션<br>

의존성이 바뀌지 않으면 이전 값 재사용<br>

✅ 문법
jsx
복사
편집
const memoizedValue = useMemo(() => 계산식, [의존성]);
✅ 사용 이유
성능 최적화<br>

불필요한 재계산 방지<br>

✅ 예시
jsx
복사
편집
const result = useMemo(() => {
  return heavyComputation(input);
}, [input]);
<br>
🔹 useCallback()<br>
함수를 메모이제이션하여 불필요한 함수 재생성 방지<br>

특히 자식 컴포넌트에 함수를 props로 넘길 때 유용함<br>

✅ 문법
jsx
복사
편집
const memoizedFn = useCallback(() => {
  // some logic
}, [의존성]);
<br>
🔹 useRef()<br>
DOM 접근, 이전 값 저장, 렌더링과 관계없는 값 저장<br>

.current 속성으로 값을 참조<br>

✅ 예시
jsx
복사
편집
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);
<br>
🔹 Custom Hook<br>
여러 컴포넌트에서 사용하는 공통 로직을 함수로 분리<br>

이름은 반드시 use로 시작<br>

✅ 예시
jsx
복사
편집
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  return { count, increment };
}
jsx
복사
편집
const { count, increment } = useCounter(10);
<br>
🛠 Hook 사용 규칙<br>
최상위 레벨에서만 호출해야 함 (조건문, 반복문 내부 ❌)<br>

React 함수형 컴포넌트나 Custom Hook 내부에서만 호출해야 함<br>

🧩 참고 라이브러리/플러그인<br>
React Developer Tools<br>

React Hook Form<br>

Zustand, React Query, Formik<br>

Material-UI, Recharts, Styled Components<br>
