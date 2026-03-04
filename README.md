# PropertyScope AI

An intelligent housing price prediction application built with Next.js, Genkit, and Firebase. This project leverages machine learning to provide property valuations and detailed market insights based on the King County, Washington dataset.

## Features

- **AI-Powered Estimations**: Real-time property value predictions using Gemini based on 11 critical parameters.
- **Detailed Explanations**: Understand the "why" behind every price estimation, highlighting factors like waterfront status and construction grade.
- **Interactive Reports**: Comprehensive documentation of project methodology, data analysis, and model performance.
- **Modern UI**: Built with React, Tailwind CSS, and ShadCN UI components.

## Parameters Used (King County Dataset)

The prediction model utilizes the following factors sourced from regional historical trends in Washington, USA:
- **Dimensions**: Square footage, Bedrooms, Bathrooms, Floors.
- **Location**: Zip Code (focused on King County).
- **Quality**: Construction Grade (1-13), Property Condition (1-5).
- **Luxury**: Waterfront Status, View Quality (0-4).
- **Temporal**: Year Built.

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

To push this project to your own GitHub account:

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Stage and Commit**:
   ```bash
   git add .
   git commit -m "Initial commit: PropertyScope AI"
   ```
3. **Create a Repository on GitHub**:
   Go to [github.com/new](https://github.com/new) and create a new repository (do not initialize it with a README).
4. **Connect and Push**:
   Copy the remote URL from GitHub and run:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git branch -M main
   git push -u origin main
   ```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **AI Engine**: [Genkit](https://firebase.google.com/docs/genkit)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
