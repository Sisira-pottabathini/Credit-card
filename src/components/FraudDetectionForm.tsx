
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const FraudDetectionForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Basic info
  const [creditLimit, setCreditLimit] = useState("");
  const [education, setEducation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  
  // Payment status
  const [paySept, setPaySept] = useState("");
  const [payAug, setPayAug] = useState("");
  const [payJuly, setPayJuly] = useState("");
  const [payJune, setPayJune] = useState("");
  const [payMay, setPayMay] = useState("");
  const [payApril, setPayApril] = useState("");
  
  // Bill amounts
  const [billSept, setBillSept] = useState("");
  const [billApril, setBillApril] = useState("");
  
  // Payment amounts
  const [amtSept, setAmtSept] = useState("");
  const [amtAug, setAmtAug] = useState("");
  const [amtJuly, setAmtJuly] = useState("");
  const [amtJune, setAmtJune] = useState("");
  const [amtMay, setAmtMay] = useState("");
  const [amtApril, setAmtApril] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate prediction
    setTimeout(() => {
      toast.success("Analysis complete. Fraud detection result: Low Risk");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyberblue to-cyberpurple">
            Credit Card Fraud Detection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-border pb-2">Account Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="creditLimit">Credit Limit Balance</Label>
                  <Input
                    id="creditLimit"
                    type="number"
                    placeholder="Enter credit limit"
                    value={creditLimit}
                    onChange={(e) => setCreditLimit(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="education">Education</Label>
                  <Select value={education} onValueChange={setEducation} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="jobHolder">Job Holder</SelectItem>
                      <SelectItem value="highSchool">High School</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select value={maritalStatus} onValueChange={setMaritalStatus} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Payment Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-border pb-2">Payment Status</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paySept">Payment Status (September)</Label>
                  <Select value={paySept} onValueChange={setPaySept} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payAug">Payment Status (August)</Label>
                  <Select value={payAug} onValueChange={setPayAug} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payJuly">Payment Status (July)</Label>
                  <Select value={payJuly} onValueChange={setPayJuly} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payJune">Payment Status (June)</Label>
                  <Select value={payJune} onValueChange={setPayJune} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payMay">Payment Status (May)</Label>
                  <Select value={payMay} onValueChange={setPayMay} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="payApril">Payment Status (April)</Label>
                  <Select value={payApril} onValueChange={setPayApril} required>
                    <SelectTrigger className="bg-muted">
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 month delayed</SelectItem>
                      <SelectItem value="2">2 months delayed</SelectItem>
                      <SelectItem value="3">3 months delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Bill Amounts */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-border pb-2">Bill Amounts</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billSept">Bill Amount (September)</Label>
                  <Input
                    id="billSept"
                    type="number"
                    placeholder="Enter bill amount"
                    value={billSept}
                    onChange={(e) => setBillSept(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billApril">Bill Amount (April)</Label>
                  <Input
                    id="billApril"
                    type="number"
                    placeholder="Enter bill amount"
                    value={billApril}
                    onChange={(e) => setBillApril(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
              </div>
            </div>
            
            {/* Payment Amounts */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b border-border pb-2">Payment Amounts</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amtSept">Payment Amount (September)</Label>
                  <Input
                    id="amtSept"
                    type="number"
                    placeholder="Enter amount for month 1"
                    value={amtSept}
                    onChange={(e) => setAmtSept(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amtAug">Payment Amount (August)</Label>
                  <Input
                    id="amtAug"
                    type="number"
                    placeholder="Enter amount for month 2"
                    value={amtAug}
                    onChange={(e) => setAmtAug(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amtJuly">Payment Amount (July)</Label>
                  <Input
                    id="amtJuly"
                    type="number"
                    placeholder="Enter amount for month 3"
                    value={amtJuly}
                    onChange={(e) => setAmtJuly(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amtJune">Payment Amount (June)</Label>
                  <Input
                    id="amtJune"
                    type="number"
                    placeholder="Enter amount for month 4"
                    value={amtJune}
                    onChange={(e) => setAmtJune(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amtMay">Payment Amount (May)</Label>
                  <Input
                    id="amtMay"
                    type="number"
                    placeholder="Enter amount for month 5"
                    value={amtMay}
                    onChange={(e) => setAmtMay(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amtApril">Payment Amount (April)</Label>
                  <Input
                    id="amtApril"
                    type="number"
                    placeholder="Enter amount for month 6"
                    value={amtApril}
                    onChange={(e) => setAmtApril(e.target.value)}
                    required
                    className="bg-muted"
                  />
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full cyber-button text-lg py-6" 
              disabled={isLoading}
            >
              {isLoading ? "Analyzing..." : "Predict"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FraudDetectionForm;
