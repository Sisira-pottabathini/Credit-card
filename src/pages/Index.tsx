
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ShieldCheck, Lock, Zap } from "lucide-react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4">
        <div className="container max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyberblue to-cyberpurple">Credit Card</span> Fraud Detection
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Leverage the power of AI to identify fraud credit card transactions with high accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              {isAuthenticated ? (
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  className="text-lg py-6 px-8 cyber-button"
                >
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={() => navigate("/signup")} 
                    className="text-lg py-6 px-8 cyber-button"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/login")} 
                    className="text-lg py-6 px-8"
                  >
                    Login
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            
            
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Index;
