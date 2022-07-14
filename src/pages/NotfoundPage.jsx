import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
    return (
        <div>
            404 error. <Link to="/">To HOME</Link>
        </div>
    );
};

export default NotfoundPage;