import { useLocation } from "react-router";
import { determineZodiac, getYearArray } from "./lib/ZodiacLogic";
import { capitalize } from "./lib/utils";
import useFetch from './useFetch';
import zodiacData from './assets/zodiacData.json'
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
import ListingCard from "./ListingCard";
import LoadingPage from "./LoadingPage";
import { useState, useEffect } from "react";

const Summary = () => {
    const [isLoading, setIsLoading] = useState(true);

    const useQuery = () => {
        const params = new URLSearchParams(useLocation().search);

        return params
    }
    
    const convertLocation = (locations) => {
        return locations.map(str=>'zo' + str.toLowerCase().split(" ").join("_"))
    }

    const constructApiUrl = (locations) => {
        const apiUrl = 'https://www.99.co/api/v2/web/search/listings?';
        const queryParams = {
            'listing_type': 'sale',
            'property_segment': 'residential',
            'page_size': 10,
            'page_num': 1,
            'query_type': 'zone',
        }
        queryParams['query_ids'] = convertLocation(locations);

        return apiUrl + new URLSearchParams(queryParams).toString()
    }

    const constructSRPUrl = (locations) => {
        const apiUrl = 'https://www.99.co/singapore/sale?';
        const queryParams = {
            'listing_type': 'sale',
            'property_segment': 'residential',
            'page_size': 10,
            'page_num': 1,
            'query_type': 'zone',
        }
        queryParams['query_ids'] = convertLocation(locations);

        return apiUrl + new URLSearchParams(queryParams).toString()
    }

    /* handle transition */
    useEffect(() => {
        runTransition();
    },[isLoading])

    const runTransition = () => {
        setTimeout(() => {
            const loader = document.querySelector('.loading-page');
            const summaryPage = document.querySelector('.summary-page');
            summaryPage.classList.remove('loader--hide');
            loader.classList.add('loader--hide');
        }, 2000)
        setIsLoading(false);
    }

    /* handling zodiacs */
    const params = useQuery();
    const birthDate = params.get('birth_date');
    const birthDateObject = new Date(birthDate);
    const yearArray = getYearArray(birthDateObject.getFullYear());
    const zodiac = birthDateObject && determineZodiac(birthDate);
    const oneZodiacData = zodiacData[zodiac]
    
    const zodiacImages = {
        'dog': dogImage,
        'dragon': dragonImage,
        'goat': goatImage,
        'horse': horseImage,
        'monkey': monkeyImage,
        'rat': ratImage,
        'ox': oxImage,
        'pig': pigImage,
        'rabbit': rabbitImage,
        'rooster': roosterImage,
        'snake': snakeImage,
        'tiger': tigerImage,
    };
    const zodiacImage = zodiacImages[zodiac];

    /* handling listings */
    const searchApiUrl = constructApiUrl(oneZodiacData.lucky_locations);
    const { data, isPending, error } = useFetch(searchApiUrl);
    const listings = data && data.data.sections[0].listings;

    return (
        <div className="summary">
            <LoadingPage />
            <div className="summary-page loader--hide">
                <div className="summary-head">
                    <h1>Your Chinese Zodiac is</h1>
                    <img src={zodiacImage} alt={`${zodiac}_image`} />
                    <h1>{capitalize(zodiac)}</h1>
                    <p>{yearArray.slice(0, 2).join(', ')}, <b>{birthDateObject.getFullYear()}</b>, {yearArray.slice(3, 5).join(', ')}</p>
                </div>
                <div className="summary-details">
                    <div className="summary-details-1-col">
                        <h4>Health</h4>
                        <p>{oneZodiacData.health}</p>
                    </div>
                    <div className="summary-details-1-col">
                        <h4>Wealth</h4>
                        <p>{oneZodiacData.wealth}</p>
                    </div>
                    <div className="summary-details-1-col">
                        <h4>Romance</h4>
                        <p>{oneZodiacData.romance}</p>
                    </div>
                    <div className="summary-details-2-cols">
                        <div>
                            <h4>Lucky Numbers</h4>
                            <p>{oneZodiacData.lucky_numbers.join(', ')}</p>
                        </div>
                        <div>
                            <h4>Lucky Colors</h4>
                            <p>{oneZodiacData.lucky_colors.join(', ')}</p>
                        </div>
                    </div>
                    <div className="summary-details-2-cols">
                        <div>
                            <h4>Lucky Directions</h4>
                            <p>{oneZodiacData.lucky_directions.join(', ')}</p>
                        </div>
                        <div>
                            <h4>Lucky Locations</h4>
                            <p>{oneZodiacData.lucky_locations.join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div className="summary-listings">
                    <h2>Listings for Sale curated for people with {capitalize(zodiac)} Zodiac</h2>
                    <div className="summary-buttons">
                        <div>
                            <b>Based on your lucky locations</b>
                        </div>
                        <div>
                            <a href={constructSRPUrl(oneZodiacData.lucky_locations)} target="_blank" rel="noreferrer">
                                View all
                            </a>
                        </div>
                    </div>
                    { isPending && <div>Loading...</div> }
                    { error && <div>{error.message}</div> }
                    { listings && listings.map((listing) => (
                        <ListingCard listing={listing} key={listing.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Summary;