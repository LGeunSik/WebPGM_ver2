import React, { useState } from 'react';
import './styles.css';

const BenchPress = () => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [form, setForm] = useState('좋은 자세 유지');
  const [sets, setSets] = useState([]);

  const handleSetEnd = () => {
    setSets([...sets, `세트 ${sets.length + 1}: ${reps}회, ${weight}kg`]);
    setReps(0);
    setWeight(0);
  };

  return (
    <div className="container">
      
      <img className="side-gif left" src="/exercise2.gif" alt="운동 GIF" />
      <h2>벤치프레스</h2>
      <p>벤치프레스는 상체 강화를 위한 운동입니다.</p>
      <p>장점:</p>
     

      <ul>
        <li>상체 근육, 특히 가슴과 삼두근을 효과적으로 발달시킵니다.</li>
        <li>전반적인 상체 힘을 증가시켜 다양한 운동 수행 능력을 향상시킵니다.</li>
      </ul>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/otJ9EKA8bgQ?si=89oL_n2ac8saozzZ" 
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
      <button onClick={() => setWeight(weight + 5)}>무게 증가</button>
      <button onClick={() => setForm('올바른 자세 유지')}>폼 변경</button>
      <button onClick={handleSetEnd}>세트 종료</button>
      <h3>저장된 세트:</h3>
      <ul>
        {sets.map((set, index) => (
          <li key={index}>{set}</li>
        ))}
      </ul>
      <img className="side-gif right" src="/exercise1.gif" alt="운동 GIF" />
    </div>
  );
};

export default BenchPress;
