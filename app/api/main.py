from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from .process_image import process_image

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Add both localhost variations
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/process-image")
async def process_image_endpoint(file: UploadFile):
    contents = await file.read()
    text = process_image(contents)
    return {"text": text} 