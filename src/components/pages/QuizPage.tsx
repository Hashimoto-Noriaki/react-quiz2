import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const';
import quizData  from '../../data/quiz';
import Button  from '../Button/Button';
import Display from '../Display/Display';

export default function QuizPage(){
    const [quizIndex,setQuizIndex] = useState(0);
    const [answerLog,setAnswerLog] = useState([]);
    const navigation = useNavigate();
    const MAX_QUIZ_LEN = quizData.length;
    const handleClick = (clickedIndex)=> {
        if(clickedIndex === quizData[quizIndex].answerIndex){
            setAnswerLog([...answerLog,((prev)=> [prev,true])])
        } else {
            setAnswerLog([...answerLog,((prev)=> [prev,false])])
        }
        setQuizIndex((prev) => prev + 1)
    }

        useEffect(()=> {
            const correctNumLen = answerLog.filter((answer)=> {
                return answer === true
            })
            if(answerLog.length === MAX_QUIZ_LEN ){
                navigation(ROUTES.RESULT,{
                    state: {
                        maxQuizLen: MAX_QUIZ_LEN,
                        correctNumLen: correctNumLen.length,
                    }
                })
            }
        })

    return (
        <>
            {quizData[quizIndex] && <Display>{`Q${quizIndex +1}. ${quizData[quizIndex].question}`}</Display>}
            {quizData[quizIndex] && quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`} onClick={()=> handleClick(index)}>{option}</Button>
            })}
        </>
    )
}
