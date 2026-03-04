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
  floors: z.number().min(1).max(4).describe('The number of floors in the property.'),
  waterfront: z.boolean().describe('Whether the property has a waterfront view.'),
  viewScore: z.number().int().min(0).max(4).describe('The quality of the view from the property (0-4 scale).'),
  conditionScore: z.number().int().min(1).max(5).describe('The overall condition of the property (1-5 scale).'),
  gradeScore: z.number().int().min(1).max(13).describe('The design and construction quality grade (1-13 scale).'),
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
  prompt: `You are an expert real estate AI specializing in the King County, WA market. Your task is to estimate the market value of a property and provide a concise explanation.

Property Characteristics:
- Type: {{{propertyType}}}
- Square Footage: {{{squareFootage}}} sq ft
- Bedrooms: {{{numberOfBedrooms}}}
- Bathrooms: {{{numberOfBathrooms}}}
- Floors: {{{floors}}}
- Waterfront: {{#if waterfront}}Yes{{else}}No{{/if}}
- View Quality (0-4): {{{viewScore}}}
- Condition (1-5): {{{conditionScore}}}
- Construction Grade (1-13): {{{gradeScore}}}
- Zip Code: {{{zipCode}}}
- Year Built: {{{yearBuilt}}}

Based on these details, what is the estimated market price of this property?
Provide the predicted price and a brief explanation of the key factors that influenced this price, considering typical market conditions and property valuation principles. Highlight specifically how factors like Waterfront or Construction Grade impacted the value if they are exceptional.`,
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
