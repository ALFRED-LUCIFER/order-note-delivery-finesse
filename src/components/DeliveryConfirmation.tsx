
import { DeliveryFormData } from "./DeliveryForm";
import { CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DeliveryConfirmationProps {
  formData: DeliveryFormData;
}

const DeliveryConfirmation = ({ formData }: DeliveryConfirmationProps) => {
  if (!formData) return null;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Delivery Successfully Sent!
        </h2>
        <p className="text-gray-600 max-w-lg">
          Your work has been delivered to the customer. You'll be notified once they review it.
        </p>
      </div>
      
      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-700">Delivery Summary</h3>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-medium">Delivery Title:</p>
          <p className="text-base text-gray-900">{formData.deliveryTitle}</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-medium">Message to Customer:</p>
          <div className="bg-white p-3 rounded border text-gray-800">
            {formData.message}
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-medium">Attached Files:</p>
          <div className="space-y-2">
            {formData.attachments.map((file, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded border">
                <FileText className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {formData.extraRevisions && (
          <div className="mt-4 bg-purple-50 p-3 rounded-md border border-purple-100">
            <p className="text-sm text-purple-700">
              You've offered additional revisions to the customer if needed.
            </p>
          </div>
        )}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default DeliveryConfirmation;
