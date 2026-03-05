# PropertyScope AI

An intelligent housing price prediction application built with Next.js, Genkit, and Firebase. This project leverages machine learning and regional data to provide property valuations and detailed market insights based on the King County, Washington dataset.

## Features

- **AI-Powered Estimations**: Real-time property value predictions using Gemini based on 11 critical parameters.
- **Future Valuation**: Capability to estimate property values for future years (e.g., 2040) by applying PNW market appreciation trends.
- **Detailed Explanations**: Understand the "why" behind every price estimation, highlighting factors like waterfront status and construction grade.
- **Interactive Reports**: Comprehensive documentation of project methodology, data analysis, and model performance.
- **Modern UI**: Built with React, Tailwind CSS, and ShadCN UI components.

## Project Structure (Where the "Model" Lives)

If asked where the "training" or "model logic" is located, you can refer to:
- **AI Logic**: `src/ai/flows/predict-housing-price-with-explanation.ts` - This file contains the "brain" of the app, where the AI is instructed with King County regression parameters.
- **Methodology Report**: `src/app/documentation/page.tsx` - Contains the EDA (Exploratory Data Analysis) and project results.
- **Configuration**: `src/ai/genkit.ts` - Initialization of the AI provider (Gemini).

## Parameters Used (King County Dataset)

The prediction model utilizes the following factors sourced from regional historical trends in Washington, USA:
- **Dimensions**: Square footage, Bedrooms, Bathrooms, Floors.
- **Location**: Zip Code (focused on King County).
- **Quality**: Construction Grade (1-13), Property Condition (1-5).
- **Luxury**: Waterfront Status, View Quality (0-4).
- **Temporal**: Year Built, Target Valuation Year.

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

To push this project to your repository at **https://github.com/GoldForContinent/propertyscopeAI**, run these commands in your terminal:

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Stage and Commit**:
   ```bash
   git add .
   git commit -m "Initial commit: PropertyScope AI"
   ```
3. **Connect to your Remote Repository**:
   ```bash
   git remote add origin https://github.com/GoldForContinent/propertyscopeAI.git
   ```
4. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Deployment (Host your app)

To have a live website that anyone can visit:

### Option 1: Firebase App Hosting (Recommended)
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a project and select **App Hosting** from the left sidebar.
3. Click **Get Started** and connect your GitHub account.
4. Select the `GoldForContinent/propertyscopeAI` repository.
5. Firebase will automatically detect your Next.js project and deploy it.

### Option 2: Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **New Project** and import `propertyscopeAI`.
3. Add your `GEMINI_API_KEY` in the **Environment Variables** section.
4. Click **Deploy**.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **AI Engine**: [Genkit](https://firebase.google.com/docs/genkit)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
