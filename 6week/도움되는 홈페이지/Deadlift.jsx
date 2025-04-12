import React, { useState } from 'react';
import './styles.css';

const Deadlift = () => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(20);
  const [form, setForm] = useState('좋은 자세 유지');
  const [sets, setSets] = useState([]);

  const handleSetEnd = () => {
    setSets([...sets, `세트 ${sets.length + 1}: ${reps}회, ${weight}kg`]);
    setReps(0);
    setWeight(20);
  };

  return (
    <div className="container">
      <img className="side-gif left" src="/exercise1.gif" alt="운동 GIF" />
      <h2>데드리프트</h2>
      <p>데드리프트는 전신 강화를 위한 운동입니다.</p>
      <p>장점:</p>
      <ul>
        <li>하체와 후면 체인(등, 엉덩이)을 강화하여 전신 근력 향상에 기여합니다.</li>
        <li>자세 교정에 도움을 주며 일상 생활에서의 기능적 힘을 증가시킵니다.</li>
      </ul>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/qWZAXjKcr_0?si=lEbsXriwoys6P1GR" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen 
      ></iframe>
      <p>현재 반복 횟수: {reps}</p>
      <p>현재 무게: {weight}kg</p>
      <p>폼: {form}</p>
      <button onClick={() => setReps(reps + 1)}>반복 횟수 증가</button>
      <button onClick={() => setWeight(weight + 10)}>무게 증가</button>
      <button onClick={() => setForm('올바른 자세 유지')}>폼 변경</button>
      <button onClick={handleSetEnd}>세트 종료</button>
      <h3>저장된 세트:</h3>
      <ul>
        {sets.map((set, index) => (
          <li key={index}>{set}</li>
        ))}
      </ul>
      <img className="side-gif right" src="/exercise2.gif" alt="운동 GIF" />
    </div>
  );
};

export default Deadlift;
