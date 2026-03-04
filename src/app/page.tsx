import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, Database, LineChart, ShieldCheck } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
            Smarter Real Estate <br />
            <span className="text-accent">Data-Driven Decisions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage advanced machine learning to estimate property values with precision. 
            PropertyScope AI bridges the gap between raw data and actionable real estate insights.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/predict">
              Start Prediction <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/documentation">View Methodology</Link>
          </Button>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="bg-card py-20 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Model Confidence</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Instant Appraisal</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">50k+</div>
              <div className="text-muted-foreground">Historical Records Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Cards */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Core Project Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-none bg-white">
            <CardHeader>
              <Database className="w-10 h-10 text-accent mb-2" />
              <CardTitle className="text-lg">Data Acquisition</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Utilizing curated regional housing datasets from public repositories like Kaggle and UCI.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-none bg-white">
            <CardHeader>
              <Calculator className="w-10 h-10 text-accent mb-2" />
              <CardTitle className="text-lg">Regression Modeling</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Implementing supervised learning to map property features to precise market valuations.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-none bg-white">
            <CardHeader>
              <LineChart className="w-10 h-10 text-accent mb-2" />
              <CardTitle className="text-lg">EDA Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Visualizing correlations between square footage, location, and price for deeper understanding.
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow border-none bg-white">
            <CardHeader>
              <ShieldCheck className="w-10 h-10 text-accent mb-2" />
              <CardTitle className="text-lg">Expert Explanation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              AI-driven reasoning for every prediction, highlighting key price drivers for the user.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}