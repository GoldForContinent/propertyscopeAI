# PropertyScope AI

An intelligent housing price prediction application built with Next.js, Genkit, and Firebase. This project leverages machine learning and regional data to provide property valuations and detailed market insights based on the King County, Washington dataset.

## Features

- **AI-Powered Estimations**: Real-time property value predictions using Gemini based on 11 critical parameters.
- **Future Valuation**: Capability to estimate property values for future years (e.g., 2040) by applying PNW market appreciation trends.
- **Detailed Explanations**: Understand the "why" behind every price estimation, highlighting factors like waterfront status and construction grade.
- **Interactive Reports**: Comprehensive documentation of project methodology, data analysis, and model performance.
- **Modern UI**: Built with React, Tailwind CSS, and ShadCN UI components.

## How the AI "Learned" (The Model)

If asked how the model learned or where it was trained, here is the explanation:

1. **The Baseline Data**: The model is grounded in the **King County Housing Dataset** (USA), which contains over 21,000 historical sales records. This data taught the system the statistical weight of features like square footage, location (Zip Codes), and construction quality.
2. **Hybrid Intelligence**: We use a **Prompt-Based Regression** approach. The AI (Gemini) is explicitly instructed with the regression logic derived from the King County data.
3. **Domain Knowledge**: Because the underlying engine is a Large Language Model, it also "knows" about historical inflation, tech-sector growth in the Seattle/Bellevue area, and Pacific Northwest real estate trends, allowing it to predict future values (like 2040) that standard linear models cannot.

## Project Structure

- **AI Logic**: `src/ai/flows/predict-housing-price-with-explanation.ts` - This is where the "brain" lives. It contains the prompt that combines the dataset's rules with AI reasoning.
- **Methodology Report**: `src/app/documentation/page.tsx` - Detailed analysis of the data and model performance.
- **Configuration**: `src/ai/genkit.ts` - AI initialization.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Set up environment variables**:
   Create a `.env` file with your `GEMINI_API_KEY`.
3. **Run the development server**:
   ```bash
   npm run dev
   ```

## How to push to GitHub

1. **Initialize Git**: `git init`
2. **Stage and Commit**: `git add .` then `git commit -m "Initial commit"`
3. **Connect to Remote**: `git remote add origin https://github.com/GoldForContinent/propertyscopeAI.git`
4. **Push**: `git branch -M main` then `git push -u origin main`

## Deployment

- **Firebase App Hosting**: Connect your GitHub repo in the Firebase Console under "App Hosting".
- **Vercel**: Import the repo and add your `GEMINI_API_KEY` in environment variables.
