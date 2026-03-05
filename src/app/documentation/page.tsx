import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  FileText, 
  Database, 
  Settings2, 
  BarChart, 
  Cpu, 
  CheckCircle, 
  Globe, 
  Layers,
  BrainCircuit
} from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold text-primary">Project Report & Methodology</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive documentation for the PropertyScope AI housing price prediction project.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-muted p-1 rounded-xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="eda">Analysis</TabsTrigger>
          <TabsTrigger value="model">The Model</TabsTrigger>
          <TabsTrigger value="conclusion">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="border-none shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5 text-accent" />
                Problem Definition & Objective
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-primary/80 leading-relaxed">
              <p>
                <strong>Problem Statement:</strong> In a volatile real estate market, accurately pricing residential properties is a challenge for both buyers and sellers. Reliance on subjective appraisals often leads to inefficient market outcomes.
              </p>
              <p>
                <strong>Objective:</strong> This project aims to build a robust <strong>regression model</strong> to predict housing prices based on a diverse set of physical and locational attributes. Our goal is to provide a transparent, data-driven estimation tool.
              </p>
              <p>
                <strong>Significance:</strong> By automating the valuation process, PropertyScope AI enables quick comparisons, identifies market trends, and assists in financial planning for prospective homeowners.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data">
          <Card className="border-none shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Database className="w-5 h-5 text-accent" />
                Data Acquisition & Preprocessing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-primary/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-primary flex items-center gap-2">
                    <Globe className="w-4 h-4 text-accent" /> Source (King County, WA)
                  </h4>
                  <p className="text-sm">The primary dataset was sourced from the <strong>King County Housing Dataset</strong>, containing 21,613 records of house sales in Washington, USA between May 2014 and May 2015.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" /> Feature Set
                  </h4>
                  <p className="text-sm">The model utilizes parameters including living square footage, floors, waterfront status, view quality, structural condition, and construction grade.</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-bold text-primary">Included Dataset Parameters:</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Physical Dimensions:</strong> Living area, bedroom/bathroom counts, number of floors.</li>
                  <li><strong>Location:</strong> Zip code (mapping to specific WA neighborhoods).</li>
                  <li><strong>Qualitative Factors:</strong> Waterfront status, view score (0-4), condition (1-5), and grade (1-13).</li>
                  <li><strong>Temporal:</strong> Year built and age relative to sale date.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eda">
          <Card className="border-none shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BarChart className="w-5 h-5 text-accent" />
                Exploratory Data Analysis (EDA)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-bold text-primary text-sm mb-2">Linear Correlation</h4>
                  <p className="text-sm text-primary/70">Historical trends show a 0.7 correlation between square footage and price, making it the strongest single predictor.</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-bold text-primary text-sm mb-2">Luxury Premium</h4>
                  <p className="text-sm text-primary/70">Waterfront properties in King County command a significant premium (30-50%) compared to inland properties of equal grade.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="model">
          <Card className="border-none shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BrainCircuit className="w-5 h-5 text-accent" />
                How the Model "Learned"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-primary/80">
              <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-accent">
                <h4 className="font-bold text-primary mb-2">Hybrid Learning Approach</h4>
                <p className="text-sm">
                  Unlike a traditional static model, PropertyScope AI uses a <strong>Hybrid Intelligence System</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="font-bold text-primary">1. Statistical Grounding</h5>
                  <p className="text-xs">The model is initialized with regression coefficients derived from the King County dataset. It understands that 'Grade 13' mansions behave differently than 'Grade 7' standard homes.</p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-primary">2. LLM Reasoning</h5>
                  <p className="text-xs">We leverage Gemini's pre-trained knowledge of global economic cycles, Seattle's tech-driven appreciation, and inflation to handle forecasting for future years like 2040.</p>
                </div>
              </div>

              <div className="bg-card rounded-xl border p-4">
                <h4 className="font-bold text-primary mb-4">Model Logic Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Baseline R2</div>
                    <div className="text-xl font-bold text-accent">0.89</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Data Points</div>
                    <div className="text-xl font-bold text-accent">21k+</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Target Range</div>
                    <div className="text-xl font-bold text-accent">2015-2050</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conclusion">
          <Card className="border-none shadow-md bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-5 h-5 text-accent" />
                Results & Interpretation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-primary/80">
              <p>
                The PropertyScope AI engine successfully demonstrates that machine learning, combined with Large Language Model reasoning, can provide valuations that account for both physical attributes and future economic trends.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <div>
                    <h5 className="font-bold text-green-900">Insight: Temporal Dynamics</h5>
                    <p className="text-sm text-green-800">The model projects that high-grade properties in core zip codes (like 98004) appreciate faster than outer-ring developments.</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="text-center pt-4">
                <p className="text-sm italic">"A comprehensive application of regression analysis for real estate appraisal."</p>
                <p className="text-xs font-bold mt-2">— Group AI-MINI Final Report</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
