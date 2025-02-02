import React from 'react';
import { PillIcon, Edit2Icon, TrashIcon } from 'lucide-react';

interface Medication {
    drug: string;
    dosage: string;
    image: string;
}

interface PillBottleProps {
    medication: Medication;
    isEditing: boolean;
    onClick: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
}

const PillBottle: React.FC<PillBottleProps> = ({ 
    medication, 
    isEditing, 
    onClick, 
    onEdit, 
    onDelete 
}) => {
    const handleEditClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEdit?.();
    };

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete?.();
    };

    return (
        <div className="relative group cursor-pointer" onClick={onClick}>
            <div className="p-4 bg-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-2">
                    <img src={medication.image} alt={medication.drug} className="h-12 w-12" />
                </div>
                <div className="text-center">
                    <h3 className="font-medium">{medication.drug}</h3>
                    <p className="text-sm text-gray-600">{medication.dosage}</p>
                </div>
                
                {isEditing && (
                    <div className="absolute top-2 right-2 space-x-1">
                        <button 
                            className="p-1 hover:bg-gray-200 rounded"
                            onClick={handleEditClick}
                        >
                            <Edit2Icon className="w-4 h-4" />
                        </button>
                        <button 
                            className="p-1 hover:bg-gray-200 rounded text-red-500"
                            onClick={handleDeleteClick}
                        >
                            <TrashIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PillBottle;