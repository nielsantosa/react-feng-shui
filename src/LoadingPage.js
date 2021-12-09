import {
    dogImage,
    dragonImage,
    goatImage,
    horseImage,
    monkeyImage,
    ratImage,
    oxImage,
    pigImage,
    rabbitImage,
    roosterImage,
    snakeImage,
    tigerImage,
} from './assets/index'

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <div className="loading-page-grid">
                <div className="loading-page-child-2">
                    <img src={goatImage} alt=""/>
                </div>
                <div className="loading-page-child-1">
                    <img src={dragonImage} alt=""/>
                </div>
                <div className="loading-page-child-2">
                    <img src={horseImage} alt=""/>
                </div>
                <div className="loading-page-child-3">
                    <img src={monkeyImage} alt=""/>
                </div>
                <div className="loading-page-child-4">
                    <img src={ratImage} alt=""/>
                </div>
                <div className="loading-page-child-3">
                    <img src={pigImage} alt=""/>
                </div>
                <div className="loading-page-child-1">
                    <img src={tigerImage} alt=""/>
                </div>
                <div className="loading-page-child-3">
                    <img src={roosterImage} alt=""/>
                </div>
                <div className="loading-page-child-4">
                    <img src={snakeImage} alt=""/>
                </div>
                <div className="loading-page-text">
                    <span>Gathering </span>
                    <span>Data </span>
                    <span>based </span>
                    <span>on </span>
                    <span>your </span>
                    <span>Birthdate </span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
        </div>
    )
};

export default LoadingPage;