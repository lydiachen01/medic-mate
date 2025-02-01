'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const AddMedication: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const supabase = createClient()

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedImage(file)
            // Create a preview URL for the selected image
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!selectedImage) return

        // TODO: Add image processing logic here
        console.log('Processing image:', selectedImage.name)
    }

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">
                Pill Bottle: Image to Text
            </h1>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl shadow-lg p-8 border-2 border-pink-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center bg-white/70 hover:bg-white/90 transition-colors">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="imageInput"
                        />
                        <label
                            htmlFor="imageInput"
                            className="cursor-pointer block"
                        >
                            {previewUrl ? (
                                <div className="relative w-full h-64 mx-auto">
                                    <Image
                                        src={previewUrl}
                                        alt="Preview"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            ) : (
                                <div className="py-8">
                                    <p className="text-blue-600 font-medium">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-sm text-orange-500 mt-2">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            )}
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 text-white py-3 px-4 rounded-xl hover:from-orange-500 hover:via-pink-500 hover:to-blue-500 transition-all font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedImage}
                    >
                        Process Image
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddMedication
