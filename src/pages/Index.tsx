
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bacteria, ChefHat, Heart, LineChart } from "lucide-react";
import AuthForm from "@/components/auth/AuthForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-nutrition-lighter opacity-50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI-Powered <span className="text-nutrition-primary">Personalized</span> Nutrition
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Discover the power of personalized nutrition based on your unique gut microbiome and wearable data. Get AI-tailored meal plans designed just for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Button className="text-lg px-8 py-6 bg-nutrition-primary hover:bg-nutrition-secondary" asChild>
                <Link to="/dashboard">
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/#learn-more">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:flex-1">
            <AuthForm />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="learn-more" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Intelligent Nutrition at Your Fingertips
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our system combines multiple data sources to create a truly personalized nutrition experience
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="p-4 bg-nutrition-light rounded-full mb-4">
                <Bacteria className="h-8 w-8 text-nutrition-primary" />
              </div>
              <h3 className="text-xl font-semibold">Gut Microbiome Analysis</h3>
              <p className="mt-4 text-gray-600">
                Upload your microbiome test results and get personalized insights about your gut health and tailored food recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="p-4 bg-nutrition-light rounded-full mb-4">
                <Heart className="h-8 w-8 text-nutrition-primary" />
              </div>
              <h3 className="text-xl font-semibold">Wearable Integration</h3>
              <p className="mt-4 text-gray-600">
                Connect your fitness trackers and smartwatches to provide real-time data about your sleep, activity, and stress levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="p-4 bg-nutrition-light rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-nutrition-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI Meal Planning</h3>
              <p className="mt-4 text-gray-600">
                Receive daily meal suggestions tailored to your unique biology, preferences, and health goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="p-4 bg-nutrition-light rounded-full mb-4">
                <LineChart className="h-8 w-8 text-nutrition-primary" />
              </div>
              <h3 className="text-xl font-semibold">Health Tracking</h3>
              <p className="mt-4 text-gray-600">
                Monitor your progress with comprehensive reports and visualizations of your improving health metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              How NutriGenesis AI Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced system combines multiple data sources with AI to create personalized nutrition recommendations
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute top-0 left-1/2 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-nutrition-primary flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Connect Your Data</h3>
                  <p className="mt-2 text-gray-600 max-w-2xl">
                    Upload your microbiome test results and connect your wearable devices to provide a comprehensive health profile.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-nutrition-primary flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">AI Analysis</h3>
                  <p className="mt-2 text-gray-600 max-w-2xl">
                    Our AI analyzes your unique health data to identify nutritional needs, deficiencies, and opportunities for improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-nutrition-primary flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Personalized Recommendations</h3>
                  <p className="mt-2 text-gray-600 max-w-2xl">
                    Receive daily meal plans, nutritional guidance, and lifestyle suggestions personalized to your unique biology.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-nutrition-primary flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Track Progress</h3>
                  <p className="mt-2 text-gray-600 max-w-2xl">
                    Monitor improvements in your health metrics over time and adjust your nutrition plan as your body changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-nutrition-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users who have discovered the power of personalized nutrition with NutriGenesis AI.
          </p>
          <div className="mt-8">
            <Button className="text-lg px-8 py-6 bg-nutrition-primary hover:bg-nutrition-secondary" asChild>
              <Link to="/dashboard">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="text-xl font-semibold text-nutrition-primary">NutriGenesis AI</div>
            </div>
            <div className="mt-4 md:mt-0">
              <nav className="flex space-x-8">
                <Link to="#" className="text-gray-500 hover:text-nutrition-primary">About</Link>
                <Link to="#" className="text-gray-500 hover:text-nutrition-primary">Features</Link>
                <Link to="#" className="text-gray-500 hover:text-nutrition-primary">Pricing</Link>
                <Link to="#" className="text-gray-500 hover:text-nutrition-primary">Contact</Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 NutriGenesis AI. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-nutrition-primary">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-nutrition-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
