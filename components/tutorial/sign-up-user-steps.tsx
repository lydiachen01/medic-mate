import React from 'react';

const SignUpUserSteps = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">User Sign Up Steps</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>Create an account</li>
                <li>Verify your email</li>
                <li>Complete your profile</li>
            </ol>
        </div>
    );
};

export default SignUpUserSteps; 