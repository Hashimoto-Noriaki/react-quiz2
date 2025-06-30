import { Link,useLocation } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function ResultPage(){
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen;
    const correctNumLen = location.state.correctNumLen;
    return (
        <>
            <h1>結果発表</h1>
            <p>あなたの結果は...</p>
            <p>{`全${maxQuizLen}問中、${correctNumLen}問正解`}</p>
            <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
        </>
    )
}
