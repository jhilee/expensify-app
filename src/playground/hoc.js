// Higher Order Component (HOC) - A component (HOC) that renders another component (regular)
// purpose : Reuse code
// Render hijacking
// Prop manipulation
// Abstract State
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>
            }
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div>
                    <p>You are logged in</p>
                    <WrappedComponent {...props} />
                </div>
                ) : (
                <p>Please log in to access the information</p>
                )}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));

