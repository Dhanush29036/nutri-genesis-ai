
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ActivitySquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "You have been logged in successfully!",
      });
      
      // Redirect to dashboard in a real application
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "Your account has been created successfully!",
      });
      
      // Redirect to dashboard in a real application
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <div className="flex justify-center mb-2">
          <div className="bg-nutrition-light p-2 rounded-full">
            <ActivitySquare className="h-8 w-8 text-nutrition-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">NutriGenesis AI</CardTitle>
        <CardDescription className="text-center">
          Personalized nutrition powered by AI
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Create Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="p-6 pt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-nutrition-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-nutrition-primary hover:bg-nutrition-secondary" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="p-6 pt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="#" className="text-nutrition-primary hover:underline">
                    terms and conditions
                  </a>
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-nutrition-primary hover:bg-nutrition-secondary" 
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
            Google
          </Button>
          <Button variant="outline">
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.365 1.43c0 1.14-.788 2.083-1.83 2.342-1.03.26-1.842-.5-1.842-1.647 0-1.142.79-2.09 1.83-2.347 1.04-.256 1.842.501 1.842 1.652zm-3.484 0c0 1.14-.789 2.083-1.83 2.342-1.03.26-1.842-.5-1.842-1.647 0-1.142.79-2.09 1.83-2.347 1.04-.256 1.842.501 1.842 1.652zm-7.36 3.286l-2.045.501c0 3.59.35 6.053 1.943 7.739 1.593 1.686 3.118 2.584 7.38 2.584 4.262 0 5.788-.898 7.38-2.584 1.594-1.686 1.943-4.149 1.943-7.739l-2.045-.501c0 2.711-.062 3.891-1.895 5.787-1.834 1.896-3.377 2.33-5.883 2.33s-4.049-.434-5.883-2.33c-1.833-1.896-1.895-3.076-1.895-5.787zm8.91 12.254c-2.253 0-4.597-1.258-4.597-3.44 0-2.182 2.338-3.44 4.597-3.44 2.26 0 4.598 1.258 4.598 3.44 0 2.182-2.338 3.44-4.598 3.44zm0-2.321c1.109 0 2.275-.562 2.275-1.119 0-.557-1.166-1.119-2.275-1.119-1.11 0-2.276.562-2.276 1.119 0 .557 1.166 1.119 2.276 1.119z"></path>
            </svg>
            Apple
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
