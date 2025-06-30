import quizData  from '../../data/quiz';
import Button  from '../Button/Button';
import Display from '../Display/Display';

export default function QuizPage(){
    const quizIndex = 0;
    return (
        <>
            <Display>
                {`Q1. ${quizData[quizIndex].question}`}
            </Display>
            {quizData[quizIndex].options.map((option,index)=> {
                return <Button key={`option-${index}`}>{option}</Button>
            })}
        </>
    )
}
