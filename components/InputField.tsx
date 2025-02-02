import React from 'react';
import { ChevronDown } from 'lucide-react';

interface InputFieldProps {
    fieldName: string;
    type: "text" | "dropdown" | "text+dropdown";
    options?: string[];
}

const InputField: React.FC<InputFieldProps> = ({ fieldName, type, options = [] }) => {
    const defaultOptions = {
        Dosage: ['mg', 'mcg', 'g', 'mL', 'IU'],
        Frequency: ['daily', 'twice daily', 'weekly', 'as needed', 'every 4 hours', 'every 6 hours', 'every 8 hours']
    };

    const getOptions = () => {
        if (options.length > 0) return options;
        return defaultOptions[fieldName as keyof typeof defaultOptions] || [];
    };

    const renderInput = () => {
        switch (type) {
            case "text":
                return (
                    <input
                        type="text"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter ${fieldName}`}
                    />
                );

            case "dropdown":
                return (
                    <div className="relative">
                        <select 
                            className="w-full p-2 border rounded-md appearance-none bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select {fieldName}</option>
                            {getOptions().map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                );

            case "text+dropdown":
                return (
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Enter ${fieldName} amount`}
                        />
                        <div className="relative w-1/3">
                            <select 
                                className="w-full p-2 border rounded-md appearance-none bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Unit</option>
                                {getOptions().map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {fieldName}
            </label>
            {renderInput()}
        </div>
    );
};

export default InputField; 