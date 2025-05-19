
import { useState } from "react";
import { Card } from "@/components/ui/card";
import DeliveryForm from "@/components/DeliveryForm";
import OrderSummary from "@/components/OrderSummary";
import DeliveryConfirmation from "@/components/DeliveryConfirmation";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DeliveryPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  
  const handleSubmit = (data: any) => {
    setFormData(data);
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {isSubmitted ? "Delivery Complete!" : "Deliver Your Order"}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <div className="p-6">
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
