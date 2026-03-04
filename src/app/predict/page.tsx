"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { predictHousingPriceWithExplanation, type PredictHousingPriceWithExplanationOutput } from "@/ai/flows/predict-housing-price-with-explanation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Sparkles, RefreshCcw, DollarSign, Info } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  squareFootage: z.coerce.number().positive("Square footage must be positive"),
  numberOfBedrooms: z.coerce.number().int().positive("Must have at least 1 bedroom"),
  numberOfBathrooms: z.coerce.number().positive("Must have at least 1 bathroom"),
  zipCode: z.string().length(5, "Zip code must be exactly 5 digits").regex(/^\d{5}$/, "Invalid format"),
  yearBuilt: z.coerce.number().int().min(1800).max(new Date().getFullYear()),
  propertyType: z.enum(['single_family', 'condo', 'townhouse']),
})

type FormValues = z.infer<typeof formSchema>

export default function PredictPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictHousingPriceWithExplanationOutput | null>(null)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      squareFootage: 2000,
      numberOfBedrooms: 3,
      numberOfBathrooms: 2,
      zipCode: "90210",
      yearBuilt: 2005,
      propertyType: "single_family",
    },
  })

  const fillSampleData = () => {
    const samples = [
      { sqft: 1500, beds: 2, baths: 1, zip: "10001", year: 1985, type: 'condo' as const },
      { sqft: 3500, beds: 4, baths: 3.5, zip: "90210", year: 2018, type: 'single_family' as const },
      { sqft: 2200, beds: 3, baths: 2.5, zip: "60601", year: 2010, type: 'townhouse' as const },
    ]
    const random = samples[Math.floor(Math.random() * samples.length)]
    form.setValue("squareFootage", random.sqft)
    form.setValue("numberOfBedrooms", random.beds)
    form.setValue("numberOfBathrooms", random.baths)
    form.setValue("zipCode", random.zip)
    form.setValue("yearBuilt", random.year)
    form.setValue("propertyType", random.type)
  }

  async function onSubmit(values: FormValues) {
    setLoading(true)
    setResult(null)
    try {
      const prediction = await predictHousingPriceWithExplanation(values)
      setResult(prediction)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Prediction Error",
        description: "Failed to generate prediction. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Input Form */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-primary">Property Estimator</h1>
            <p className="text-muted-foreground">Enter the property details below to get a real-time market estimation.</p>
          </div>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">Property Details</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={fillSampleData}
                className="text-accent hover:text-accent/80 hover:bg-accent/10"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Fill Sample Data
              </Button>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="squareFootage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Sq Footage</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 2500" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="single_family">Single Family Home</SelectItem>
                              <SelectItem value="condo">Condo</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="numberOfBedrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrooms</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="numberOfBathrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bathrooms</FormLabel>
                          <FormControl>
                            <Input step="0.5" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input placeholder="12345" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="yearBuilt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year Built</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing Market Data...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Calculate Estimation
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>

        {/* Results Display */}
        <section className="sticky top-24">
          {!result && !loading && (
            <Card className="border-dashed border-2 bg-transparent h-[400px] flex items-center justify-center">
              <CardContent className="text-center space-y-4">
                <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Calculator className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">No Data Analyzed Yet</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Fill out the form and click Calculate to see the PropertyScope AI prediction and detailed market analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {loading && (
            <Card className="h-[400px] flex flex-col items-center justify-center gap-4 border-none shadow-md bg-white animate-pulse">
               <Loader2 className="w-12 h-12 text-accent animate-spin" />
               <p className="text-primary font-medium">Crunching historical property data...</p>
            </Card>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border-none shadow-xl bg-white overflow-hidden">
                <div className="bg-primary p-6 text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-accent" />
                    Market Value Prediction
                  </CardTitle>
                </div>
                <CardContent className="pt-8 text-center space-y-6">
                  <div className="space-y-1">
                    <div className="text-5xl font-black text-primary tracking-tight">
                      ${result.predictedPrice.toLocaleString()}
                    </div>
                    <p className="text-muted-foreground font-medium uppercase tracking-wider text-xs">Estimated Current Value</p>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-xl text-left border border-accent/20 flex gap-4">
                    <Info className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-tight">AI Analysis & Reasoning</h4>
                      <p className="text-sm text-primary/80 leading-relaxed">
                        {result.explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-card p-6 rounded-xl border space-y-4">
                <h4 className="font-bold text-primary flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-accent" />
                  Market Factors
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded-lg border text-center">
                    <div className="text-xs text-muted-foreground">Confidence</div>
                    <div className="font-bold text-primary">High</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border text-center">
                    <div className="text-xs text-muted-foreground">Trend</div>
                    <div className="font-bold text-green-600">Appreciating</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}