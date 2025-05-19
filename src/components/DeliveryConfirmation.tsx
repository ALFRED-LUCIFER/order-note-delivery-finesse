
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
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
        <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
        <h2 className="text-xl font-semibold text-slate-800">
          Delivery Successfully Sent!
        </h2>
        <p className="text-slate-500 max-w-lg">
          Your work has been delivered to the customer. You'll be notified once they review it.
        </p>
      </div>
      
      <div className="space-y-6">
        <h3 className="font-medium text-slate-700 text-lg">Delivery Summary</h3>
        
        <div className="rounded-lg overflow-hidden border border-slate-200 divide-y divide-slate-200">
          <div className="p-4 bg-white">
            <p className="text-sm text-slate-500 mb-1">Delivery Title</p>
            <p className="text-base text-slate-800 font-medium">{formData.deliveryTitle}</p>
          </div>
          
          <div className="p-4 bg-white">
            <p className="text-sm text-slate-500 mb-2">Message to Customer</p>
            <div className="bg-slate-50 p-4 rounded border border-slate-200 text-slate-700 text-sm whitespace-pre-line">
              {formData.message}
            </div>
          </div>
          
          <div className="p-4 bg-white">
            <p className="text-sm text-slate-500 mb-2">Attached Files</p>
            <div className="space-y-2">
              {formData.attachments.map((file, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-50 p-3 rounded border border-slate-200">
                  <div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {formData.extraRevisions && (
          <div className="mt-4 bg-purple-50 p-4 rounded-md border border-purple-100">
            <p className="text-sm text-purple-700 flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 inline" />
              You've offered additional revisions to the customer if needed
            </p>
          </div>
        )}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button asChild variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default DeliveryConfirmation;
