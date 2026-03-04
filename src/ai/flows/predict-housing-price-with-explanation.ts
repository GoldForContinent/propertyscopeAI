'use server';
/**
 * @fileOverview A housing price prediction AI agent.
 *
 * - predictHousingPriceWithExplanation - A function that handles the housing price prediction process, including an explanation.
 * - PredictHousingPriceWithExplanationInput - The input type for the predictHousingPriceWithExplanation function.
 * - PredictHousingPriceWithExplanationOutput - The return type for the predictHousingPriceWithExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictHousingPriceWithExplanationInputSchema = z.object({
  squareFootage: z.number().positive().describe('The total square footage of the property.'),
  numberOfBedrooms: z.number().int().positive().describe('The number of bedrooms in the property.'),
  numberOfBathrooms: z.number().positive().describe('The number of bathrooms in the property.'),
  zipCode: z.string().length(5).regex(/^\d{5}$/).describe('The 5-digit zip code of the property location.'),
  yearBuilt: z.number().int().min(1800).max(new Date().getFullYear()).describe('The year the property was built.'),
  propertyType: z.enum(['single_family', 'condo', 'townhouse']).describe('The type of property (e.g., single_family, condo, townhouse).'),
});
export type PredictHousingPriceWithExplanationInput = z.infer<typeof PredictHousingPriceWithExplanationInputSchema>;

const PredictHousingPriceWithExplanationOutputSchema = z.object({
  predictedPrice: z.number().positive().describe('The estimated housing price in USD.'),
  explanation: z.string().describe('A brief, human-readable explanation of the key factors influencing the prediction.'),
});
export type PredictHousingPriceWithExplanationOutput = z.infer<typeof PredictHousingPriceWithExplanationOutputSchema>;

export async function predictHousingPriceWithExplanation(
  input: PredictHousingPriceWithExplanationInput
): Promise<PredictHousingPriceWithExplanationOutput> {
  return predictHousingPriceWithExplanationFlow(input);
}

const housingPricePrompt = ai.definePrompt({
  name: 'predictHousingPriceWithExplanationPrompt',
  input: {schema: PredictHousingPriceWithExplanationInputSchema},
  output: {schema: PredictHousingPriceWithExplanationOutputSchema},
  prompt: `You are an expert real estate AI. Your task is to estimate the market value of a property and provide a concise explanation for your prediction based on the provided characteristics.\n\nProperty Characteristics:\n- Square Footage: {{{squareFootage}}} sq ft\n- Number of Bedrooms: {{{numberOfBedrooms}}}\n- Number of Bathrooms: {{{numberOfBathrooms}}}\n- Zip Code: {{{zipCode}}}\n- Year Built: {{{yearBuilt}}}\n- Property Type: {{{propertyType}}}\n\nBased on these details, what is the estimated market price of this property?\nProvide the predicted price and a brief explanation of the key factors that influenced this price, considering typical market conditions and property valuation principles.\n`,
});

const predictHousingPriceWithExplanationFlow = ai.defineFlow(
  {
    name: 'predictHousingPriceWithExplanationFlow',
    inputSchema: PredictHousingPriceWithExplanationInputSchema,
    outputSchema: PredictHousingPriceWithExplanationOutputSchema,
  },
  async (input) => {
    const {output} = await housingPricePrompt(input);
    if (!output) {
      throw new Error('Failed to get prediction from AI model.');
    }
    return output;
  }
);
