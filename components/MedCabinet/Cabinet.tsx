'use client'

import React, { useState } from 'react';
import PillBottle from "./PillBottle"
import CabinetEdit from './CabinetEdit';
import { Pencil, X, Plus, Image, Edit3 } from 'lucide-react';
import AddMedication from '@/app/add_meds/add_meds';
import InputField from '../InputField';

interface Medication {
  drug: string;
  dosage: string;
  image: string;
}

const Cabinet: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<'none' | 'manual' | 'image'>('none');
  const [showAddForm, setShowAddForm] = useState(false);

  const handlePillBottleClick = (med: Medication) => {
    console.log("PillBottle clicked:", med);
    setSelectedMedication(med);
  };

  const closePopup = () => {
    setSelectedMedication(null);
  };

  const handleAddOption = (type: 'manual' | 'image') => {
    setIsAddMenuOpen(false);
    setActiveForm(type);
    setTimeout(() => setShowAddForm(true), 100);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setTimeout(() => setActiveForm('none'), 300);
  };

  if (isEditing) {
    return (
      <CabinetEdit 
        onSave={() => setIsEditing(false)}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  // This is just example data - you'll want to fetch this from your database
  const medications: Medication[] = [
    { drug: "Lisinopril", dosage: "10mg", image: "/pink_logo.png" },
    { drug: "Metformin", dosage: "500mg", image: "/pink_logo.png" },
    { drug: "Sertraline", dosage: "50mg", image: "/pink_logo.png" },
    { drug: "Levothyroxine", dosage: "75mcg", image: "/pink_logo.png" },
    { drug: "Omeprazole", dosage: "20mg", image: "/pink_logo.png" },
    { drug: "Amlodipine", dosage: "5mg", image: "/pink_logo.png" },
    { drug: "Metoprolol", dosage: "25mg", image: "/pink_logo.png" },
    { drug: "Gabapentin", dosage: "300mg", image: "/pink_logo.png" },
    { drug: "Escitalopram", dosage: "10mg", image: "/pink_logo.png" },
    { drug: "Atorvastatin", dosage: "40mg", image: "/pink_logo.png" },
    { drug: "Pantoprazole", dosage: "40mg", image: "/pink_logo.png" },
    { drug: "Fluticasone", dosage: "50mcg", image: "/pink_logo.png" }
  ];

  return (
    <div className="h-[70%] w-[70%] relative mx-auto">
      {/* Main Cabinet View */}
      <div className={`absolute w-full transition-transform duration-300 ease-in-out ${
        showAddForm ? '-translate-x-[105%]' : 'translate-x-0'
      }`}>
        <div className="p-3 sm:p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold">Medicine Cabinet</h2>
            <button 
              onClick={() => setIsEditing(true)}
              className="p-2 sm:px-4 sm:py-2 text-blue-500 rounded"
            >
              <Pencil className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 overflow-y-auto max-h-[calc(100%-4rem)]">
            {medications.map(med => (
              <PillBottle 
                key={med.drug}
                medication={med}
                isEditing={false}
                onClick={() => handlePillBottleClick(med)}
              />
            ))}
          </div>

          {/* Floating Action Button and Menu */}
          <div className="absolute bottom-6 right-6">
            {isAddMenuOpen && (
              <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg overflow-hidden">
                <button 
                  onClick={() => handleAddOption('manual')}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 w-full text-left"
                >
                  <Edit3 className="w-5 h-5" />
                  <span>Manual Input</span>
                </button>
                <button 
                  onClick={() => handleAddOption('image')}
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 w-full text-left"
                >
                  <Image className="w-5 h-5" />
                  <span>Image Input</span>
                </button>
              </div>
            )}
            <button
              onClick={() => setIsAddMenuOpen(!isAddMenuOpen)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Medication Form */}
      {(showAddForm || activeForm !== 'none') && (
        <div className={`absolute w-full transition-transform duration-300 ease-in-out ${
          showAddForm ? 'translate-x-0' : 'translate-x-[105%]'
        }`}>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {activeForm === 'manual' ? 'Add Medication Manually' : 'Add Medication from Image'}
              </h2>
              <button 
                onClick={handleCloseForm}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeForm === 'manual' && (
              <div className="space-y-4">
                {/* Add your manual input form here */}
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
            )}

            {activeForm === 'image' && (
              <div className="h-full overflow-y-auto">
                <AddMedication />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile-friendly popup for medication details */}
      {selectedMedication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white w-full sm:w-[90vw] md:w-[60vw] lg:w-[40vw] max-h-[80vh] rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold">{selectedMedication.drug}</h3>
                <button 
                  onClick={closePopup}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img 
                  src={selectedMedication.image} 
                  alt={selectedMedication.drug} 
                  className="w-32 h-32 object-contain"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <p className="text-gray-600">
                    <span className="font-medium">Dosage:</span> {selectedMedication.dosage}
                  </p>
                  {/* Add more medication details here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cabinet;