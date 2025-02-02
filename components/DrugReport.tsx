import React, { useState } from 'react';

const DrugReport: React.FC = () => {
    const [drugName, setDrugName] = useState('');
    const [results, setResults] = useState<any>(null);

    const capitalizeFirstLetter = (str: string) => {
        if (!str) return ''; 
        console.log("IN CAPITALIZE:", str)
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        fetch(`/api/check_drug?name=${capitalizeFirstLetter(drugName)}`)
            .then(response => response.json())
            .then(data => {
                setResults(data);
                console.log(data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div className="container">
            <h1 className='font-bold text-xl pb-4'>Drug Interaction Checker</h1>
            <form id="drug-form" onSubmit={handleSubmit}>
                <div>Enter the name of the drug. *</div>
                <input 
                    type="text" 
                    id="drug-name" 
                    name="drug-name" 
                    value={drugName} 
                    onChange={(e) => setDrugName(e.target.value)} 
                    className='border border-slate-500 focus:bg-white rounded mt-2 p-2'
                    required 
                />
                <button type="submit" className='block mt-4 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700'>Check</button>
            </form>
            <div id="results">
                {results && (
                    <>
                        <p>Side Effects: {results.side_effects || "No side effects data available."}</p>
                        <h2>Drug Interactions:</h2>
                        {results.interactions.length > 0 ? (
                            <ul>
                                {results.interactions.map((interaction: any, index: number) => (
                                    <li key={index}>
                                        <strong>{interaction.drug}:</strong> {interaction.description}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No known interactions found.</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default DrugReport;