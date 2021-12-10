import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import property_rentals from './assets/property_rentals.png'
import PreHomePage from './PreHomePage';
import {
    dragonImage,
    pigImage,
    goatImage,
    roosterImage,
    rabbitImage,
    tigerImage,
    monkeyImage,
} from './assets/index'

const Home = () => {
    const [birthDate, setBirthDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/summary?birth_date=${birthDate}`)
    }

    /* handle transition */
    useEffect(() => {
        runTransition()
    },[isLoading])

    const runTransition = () => {
        setTimeout(() => {
            const loader = document.querySelector('.home-loading-page');
            const homepage = document.querySelector('.homepage');
            homepage.classList.remove('loader--hide');
            loader.classList.add('loader--hide');
        }, 1500)
        setIsLoading(false);
    }

    return(
        <div className="home">
            <PreHomePage />
            <div className="homepage loader--hide">
                <div className="main-img">
                    <img src={property_rentals} alt="homepage" />
                    <img src={dragonImage} alt="" />
                    <img src={pigImage} alt="" />
                    <img src={goatImage} alt="" />
                    <img src={roosterImage} alt="" />
                    <img src={rabbitImage} alt="" />
                    <img src={tigerImage} alt="" />
                    <img src={monkeyImage} alt="" />
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
        </div>
    )
};

export default Home;