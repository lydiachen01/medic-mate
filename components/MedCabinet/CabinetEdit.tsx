'use client'

import React, { useState } from 'react';
import PillBottle from './PillBottle';
import { Pencil, X } from 'lucide-react';

interface Medication {
    drug: string;
    dosage: string;
    image: string;
}

interface CabinetEditProps {
    onSave: () => void;
    onCancel: () => void;
}

const CabinetEdit: React.FC<CabinetEditProps> = ({ onSave, onCancel }) => {
    const [editingMed, setEditingMed] = useState<Medication | null>(null);
    const [medications, setMedications] = useState<Medication[]>([
        { drug: "Aspirin", dosage: "81mg", image: "/pink_logo.png" },
        { drug: "Vitamin D", dosage: "2000 IU", image: "/pink_logo.png" },
        { drug: "Vitamin C", dosage: "500mg", image: "/pink_logo.png" },
        { drug: "Ibuprofen", dosage: "200mg", image: "/pink_logo.png" },
        { drug: "Calcium", dosage: "500mg", image: "/pink_logo.png" },
        { drug: "Iron", dosage: "65mg", image: "/pink_logo.png" },
        { drug: "Magnesium", dosage: "400mg", image: "/pink_logo.png" },
        { drug: "Zinc", dosage: "50mg", image: "/pink_logo.png" },
        { drug: "B12", dosage: "1000mcg", image: "/pink_logo.png" }
    ]);

    const handleEdit = (med: Medication) => {
        setEditingMed(med);
    };

    const handleDelete = (medToDelete: Medication) => {
        setMedications(meds => meds.filter(med => med !== medToDelete));
    };

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold">Edit Medicine Cabinet</h2>
                <div className="space-x-2">
                    <button 
                        onClick={onSave}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Save
                    </button>
                    <button 
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {medications.map((med, index) => (
                    <PillBottle 
                        key={index}
                        medication={med}
                        isEditing={true}
                        onClick={() => {}}
                        onEdit={() => handleEdit(med)}
                        onDelete={() => handleDelete(med)}
                    />
                ))}
            </div>

            {/* Edit Medication Modal */}
            {editingMed && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Edit Medication</h3>
                            <button 
                                onClick={() => setEditingMed(null)}
                                className="p-1 hover:bg-gray-100 rounded"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Image</label>
                                <div className="flex items-center space-x-4">
                                    <img 
                                        src={editingMed.image} 
                                        alt={editingMed.drug} 
                                        className="w-16 h-16"
                                    />
                                    <button className="px-3 py-1 border rounded hover:bg-gray-50">
                                        Change Image
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Drug Name</label>
                                <input 
                                    type="text"
                                    value={editingMed.drug}
                                    onChange={(e) => setEditingMed({...editingMed, drug: e.target.value})}
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Dosage</label>
                                <input 
                                    type="text"
                                    value={editingMed.dosage}
                                    onChange={(e) => setEditingMed({...editingMed, dosage: e.target.value})}
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            <div className="flex justify-end space-x-2 mt-6">
                                <button 
                                    onClick={() => setEditingMed(null)}
                                    className="px-4 py-2 border rounded hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={() => {
                                        setMedications(meds => 
                                            meds.map(med => 
                                                med === editingMed ? {...editingMed} : med
                                            )
                                        );
                                        setEditingMed(null);
                                    }}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CabinetEdit; 