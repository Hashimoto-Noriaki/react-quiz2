import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function TopPage() {
    return (
        <>
            <h1>QuizApp</h1>
            <Link to={ROUTES.QUIZ}>クイズにチャレンジ</Link>
        </>
    )
}

