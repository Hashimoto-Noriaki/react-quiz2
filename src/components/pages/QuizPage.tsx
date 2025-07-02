import { useState } from 'react';
import quizData  from '../../data/quiz';
import Display from '../../Display/Display';
import Button from '../Button/Button';

export default function QuizPage() {
    const [quizIndex,setQuizIndex] = useState(0);
    const [answerLogs,setAnswerLogs] = useState([]);

    const handleClick = (clickedIndex) => {
        if(clickedIndex === quizData[quizIndex].answerIndex){
            setAnswerLogs([...answerLogs,((prev) => [...prev,true])])
        } else {
            setAnswerLogs([...answerLogs,((prev) => [...prev,false])])
        }
        setQuizIndex((prev) => prev +1 );
    }
    return (
        <>
            {quizData[quizIndex] && <Display>{`Q${quizIndex +1}.${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`} onClick={()=> handleClick(index)}>{option}</Button>
            })}
        </>
    )
}
