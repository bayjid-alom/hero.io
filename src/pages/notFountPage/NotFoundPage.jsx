
import React from 'react';
import { Link, useNavigate } from 'react-router';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
            <div className="text-center">
                <h1 className="text-8xl md:text-9xl font-bold text-blue-600">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                    Page Not Found!
                </h2>

                <p className="text-gray-500 mt-3">
                    Sorry, the page you are looking for does not exist.
                </p>

                <div className="flex justify-center gap-3 mt-6">
                    <Link to="/" className="btn btn-primary">
                        Back to Home
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
