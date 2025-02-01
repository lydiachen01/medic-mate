from PIL import Image
import pytesseract
import io

def process_image(image_bytes):
    # Open the image using PIL
    image = Image.open(io.BytesIO(image_bytes))
    
    # Convert image to text using pytesseract
    text = pytesseract.image_to_string(image)
    
    return text 