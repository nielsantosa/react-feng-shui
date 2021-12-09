import { useState } from 'react';
import { useHistory } from 'react-router';
import property_rentals from './assets/property_rentals.png'

const Home = () => {
    const [birthDate, setBirthDate] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/summary?birth_date=${birthDate}`)
    }

    return(
        <div className="home">
            <div className="main-img">
                <img src={property_rentals} alt="homepage" />
            </div>
            <div className="home-title">
                <h1>Lucky@99</h1>
            </div>
            <div className="home-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        Insert your birthdate below!
                    </label>
                    <input
                        type="date"
                        required
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="input-box"
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div className="home-description">
                And find out your luck this year!
            </div>
        </div>
    )
};

export default Home;