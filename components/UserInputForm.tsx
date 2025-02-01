
interface InputProps {
    fieldName: string;
}

const InputField: React.FC<InputProps> = ({ fieldName }) => {
    return (
        <div>
            <label 
                htmlFor={fieldName}
                className="pr-4">{fieldName}:</label>
            <input 
                className="border rounded"
                type="text" id={fieldName} name={fieldName} required></input>
        </div>
    );
}

const UserInputForm: React.FC = () => {
    return (
        <div className="flex justify-center max-w-max border border-slate-500 rounded-lg p-4 py-10">
            <form className="grid grid-cols-1 gap-4">
                <InputField fieldName="drugName" />
                <InputField fieldName="dosage" />
                <InputField fieldName="frequency" />
            </form>
        </div>
    )
}

export default UserInputForm