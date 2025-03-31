const Introduction = ({ name, university, major, studentId, hobby }) => {
    return (
        <section>
            <h2>안녕하세요, 제 이름은 {name}입니다.</h2>
            <p>현재 {university}에 재학 중입니다.</p>
            <p>전공: {major}</p>
            <p>학번: {studentId}</p>
            <p>취미: {hobby}</p>
        </section>
    );
};
export default Introduction;
