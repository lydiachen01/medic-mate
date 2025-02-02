import React from 'react';

interface CenterProps {
    children: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {children}
        </div>
    );
};

export default Center; 