
interface InputProps {
    fieldName: string;
}

const InputField: React.FC<InputProps> = ({ fieldName }) => {
    return (
        <div>
            <label htmlFor={fieldName}>Drug Name:</label>
            <input 
                className="border rounded"
                type="text" id={fieldName} name={fieldName} required></input>
        </div>
    );
}

const UserInputForm: React.FC = () => {
    return (
        <div className="flex justify-center max-w-max border border-slate-500 rounded-lg">
            <form>
                <InputField fieldName="drugName" />
                <InputField fieldName="dosage" />
                <InputField fieldName="frequency" />
            </form>
        </div>
    )
}

export default UserInputForm