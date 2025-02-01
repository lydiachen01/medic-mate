import React from 'react';

const ConnectSupabaseSteps = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect to Supabase</h3>
            <ol className="list-decimal list-inside space-y-2">
                <li>Set up your Supabase project</li>
                <li>Add your environment variables</li>
                <li>Connect your application</li>
            </ol>
        </div>
    );
};

export default ConnectSupabaseSteps; 