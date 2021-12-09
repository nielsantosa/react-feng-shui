import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking for is not found</p>
            <Link to='/'>Back to Homepage</Link>
        </div>
    )
}

export default NotFound;