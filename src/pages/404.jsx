import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return ( 
        <div id="error-page" className="flex flex-col items-center justify-center text-center min-h-screen">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
     );
}
 
export default ErrorPage;