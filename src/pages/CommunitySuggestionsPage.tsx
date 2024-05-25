import './CommunitySuggestionsPage.css'
import { useNavigate } from 'react-router-dom';

const CommunitySuggestionsPage = () => {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate('/');
    };

    return (
    <div className='community-suggestions-page-full' onClick={navigateToHomePage}>
        <h1>SOMETHING</h1>
    </div>
    )
}

export default CommunitySuggestionsPage
