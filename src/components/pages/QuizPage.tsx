import quizData  from '../../data/quiz';
import Display from '../Display/Display';

export default function QuizPage(){
    const quizIndex = 0;
    return (
        <Display>
            <div>
                <p>{`Q1.${quizData[quizIndex].question}`}</p>
            </div>
        </Display>
    )
}
