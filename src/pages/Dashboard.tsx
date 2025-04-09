
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import FraudDetectionForm from "@/components/FraudDetectionForm";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen pt-20 pb-8 px-4">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">
              Welcome, <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyberblue to-cyberpurple">{user?.name}</span>
            </h1>
            <p className="text-foreground/70">
              Fill in the form below to analyze credit card fraud
            </p>
          </div>
          
          <FraudDetectionForm />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
