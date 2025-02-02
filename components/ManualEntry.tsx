import InputField from './InputField';

const ManualEntry: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Medication</h2>
            <form>
                <InputField fieldName="Drug" type="text"/>
                <InputField fieldName="Dosage" type="text+dropdown"/>
                <InputField fieldName="Frequency" type="dropdown"/>
                
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Medication
                </button>
            </form>
        </div>
    );
};

export default ManualEntry;