# Hack@Brown 2025 - MedicMate App

Project team: Yvette Roos, Helena Fu, Lydia Chen, Trishna Bahal

MedicMate is a personalized app designed to **demystify and gamify medical treatment plans**, ensuring patients stay **informed, engaged, and in control of their health**. Medical jargon can be overwhelming, treatments are complicated and emotionally draining, and mistakes happen—shaking trust in the healthcare system. MedicMate simplifies this by providing clear, concise explanations of prescribed therapies, medications, and scheduled appointments, all in one place.

## Our App:
- Aggregated Treatment Information: Patients can access an up-to-date, personalized overview of their treatment plan.
- Patient Empowerment: Give users more control over their treatment with summarized, easy-to-understand explanations of complex treatment plans.
- Medication Interaction Checker: Cross-check medications for dangerous interactions and ensure safety with real-time updates from trusted sources like the FDA and NIH.
- Computer Vision Verification: Using image classification (TensorFlow, OpenCV, HuggingFace), patients can scan their pills to confirm identity based on color, shape, imprints, and dosage.
- Warnings & Precautions: Receive automatic alerts about dietary restrictions, side effects, and activities to avoid based on verified medical sources.
- Multi-Language Support: Custom-trained LLM provides accurate translations for medical terms, ensuring accessibility for diverse populations.
- Seamless Integration: Connect with patient portals for easy access to records, automated notifications, and an intuitive UI for tracking medications and conditions.

## Features
✅ User-Friendly Web App: A simple, intuitive interface to manage medications and treatment plans.

✅ Pill Identification: High-resolution medication images and AI-based verification.

✅ Therapy & Dosage Tracking: Automated reminders via text notifications.

✅ Comprehensive Summary: An at-a-glance view of medications, allergies, and ongoing conditions.

## Check out our demo!
https://medi-checker.vercel.app/


## Pitch Deck
https://docs.google.com/presentation/d/1wGkYshauuJCVuha8w2W-8HAod-Ty47-LiALYpAmC1jc/edit?usp=sharing

# Devpost
https://devpost.com/software/medic-mate

## Tech Stack
Built with TypeScript, TailwindCSS, Next.js, Supabase, pytesseract, and Gemini API.

## Clone and run locally

1. Fork library and git clone

2. Use `cd` to change into the app's directory

   ```bash
   cd medic-mate
   ```
3. npm install support for supabase

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The repo should now be running on [localhost:3000](http://localhost:3000/).
