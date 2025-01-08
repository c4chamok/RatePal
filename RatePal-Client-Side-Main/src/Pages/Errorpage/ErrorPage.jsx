import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
    document.title = "404!! Not Found"
    const error = useRouteError();
    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">

            <h1 className="text-7xl">Oops !! </h1>
            <p className="text-xl mt-5">Sorry, an unexpected error has occurred.</p>
            <p>
                Error : 404!
                {error ? error.statusText || error.message : "Unknown error"}
            </p>
            <Link to={'/'} className="btn bg-indigo-500 text-white hover:bg-indigo-600">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;