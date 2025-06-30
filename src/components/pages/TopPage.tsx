import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

export default function TopPage(){
    return (
        <>
            <h1>トップ画面</h1>
            <Link path={ROUTES.QUIZ}>クイズスタート</Link>
        </>
    )
}
