import { Link,useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { ROUTES } from '../../const';
import Result from '../Result/Result';

export default function ResultPage(){
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen;
    const correctNumLen = location.state.correctNumLen;
    return (
        <>
            <h1>結果発表</h1>
            <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}/>
            <Link to={ROUTES.QUIZ}>もう一度挑戦する</Link>
            <Confetti/>
        </>
    )
}
