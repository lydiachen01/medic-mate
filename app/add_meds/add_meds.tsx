'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const AddMedication: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [extractedText, setExtractedText] = useState<string>('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState<string>('')
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

        setIsProcessing(true)
        setError('')
        try {
            const formData = new FormData()
            formData.append('file', selectedImage)

            const response = await fetch('http://localhost:8000/api/process-image', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            setExtractedText(data.text)
        } catch (error) {
            console.error('Error processing image:', error)
            setError('Failed to process image. Please make sure the server is running and try again.')
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="container mx-auto p-4 max-w-3xl min-h-[80vh] flex flex-col items-center justify-center">
            <div className="w-full space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-blue-600">
                        Let's Read Your Label
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Take a clear photo of your medication label, and we'll help you process it
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl shadow-lg p-8 border-2 border-pink-200 transform transition-all hover:shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 text-center bg-white/70 hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.01]">
                            <input
                                type="file"
                                accept="image/jpeg,image/png"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="imageInput"
                            />
                            <label
                                htmlFor="imageInput"
                                className="cursor-pointer block"
                            >
                                {previewUrl ? (
                                    <div className="relative w-full h-72 mx-auto rounded-lg overflow-hidden shadow-inner">
                                        <Image
                                            src={previewUrl}
                                            alt="Preview"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="py-12 px-6 space-y-4">
                                        <div className="w-16 h-16 mx-auto mb-4 text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                            </svg>
                                        </div>
                                        <p className="text-blue-600 font-medium text-lg">
                                            Drop your image here
                                        </p>
                                        <p className="text-sm text-orange-500">
                                            or click to browse
                                        </p>
                                    </div>
                                )}
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 text-white py-4 px-6 rounded-xl hover:from-orange-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300 font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                            disabled={!selectedImage || isProcessing}
                        >
                            {isProcessing ? (
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Processing...</span>
                                </span>
                            ) : (
                                'Process Image'
                            )}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="mt-4 p-6 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                        <p className="text-red-600 flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{error}</span>
                        </p>
                    </div>
                )}

                {extractedText && (
                    <div className="mt-6 p-6 bg-white/70 rounded-xl border border-blue-200 shadow-lg animate-fade-in">
                        <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center space-x-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Extracted Text</span>
                        </h2>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{extractedText}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddMedication
