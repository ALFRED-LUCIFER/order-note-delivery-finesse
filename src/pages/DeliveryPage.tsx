
import { useState } from "react";
import { Card } from "@/components/ui/card";
import DeliveryForm from "@/components/DeliveryForm";
import OrderSummary from "@/components/OrderSummary";
import DeliveryConfirmation from "@/components/DeliveryConfirmation";
import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeliveryPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  
  const handleSubmit = (data: any) => {
    setFormData(data);
    setIsSubmitted(true);
  };
  
  const handleReload = () => {
    window.location.reload();
  };
  
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReload}
            className="text-indigo-600 border-indigo-200 hover:bg-indigo-50"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reload Page
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          {isSubmitted ? "Delivery Complete!" : "Deliver Your Order"}
        </h1>
        
        <p className="text-slate-500 mb-8 max-w-3xl">
          {isSubmitted 
            ? "Your work has been successfully delivered to the customer." 
            : "Complete your delivery by uploading files and adding a message for your customer."}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-sm border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-white p-8">
                {!isSubmitted ? (
                  <DeliveryForm onSubmit={handleSubmit} />
                ) : (
                  <DeliveryConfirmation formData={formData} />
                )}
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
