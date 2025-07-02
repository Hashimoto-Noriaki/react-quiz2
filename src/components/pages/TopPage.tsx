import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function TopPage() {
    return (
        <>
            <h1>トップページ</h1>
            <Link to={ROUTES.QUIZ}>クイズにに挑戦</Link>
        </>

    )
}
