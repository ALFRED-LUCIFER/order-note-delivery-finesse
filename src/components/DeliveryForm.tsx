
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AttachmentUploader from "./AttachmentUploader";
import { Package, MessageSquare, Upload } from "lucide-react";

interface DeliveryFormProps {
  onSubmit: (data: DeliveryFormData) => void;
}

export interface DeliveryFormData {
  message: string;
  attachments: File[];
  extraRevisions: boolean;
  deliveryTitle: string;
}

const DeliveryForm = ({ onSubmit }: DeliveryFormProps) => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [extraRevisions, setExtraRevisions] = useState(false);
  const [deliveryTitle, setDeliveryTitle] = useState("");
  
  const handleFileChange = (files: File[]) => {
    setAttachments(files);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!deliveryTitle.trim()) {
      toast({
        title: "Missing delivery title",
        description: "Please provide a title for your delivery",
        variant: "destructive",
      });
      return;
    }
    
    if (!message.trim()) {
      toast({
        title: "Missing message",
        description: "Please include a message for the customer",
        variant: "destructive",
      });
      return;
    }
    
    if (attachments.length === 0) {
      toast({
        title: "Missing files",
        description: "Please attach at least one delivery file",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit({
      message,
      attachments,
      extraRevisions,
      deliveryTitle,
    });
    
    toast({
      title: "Delivery submitted",
      description: "Your work has been delivered successfully!",
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <Package className="h-5 w-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-medium text-slate-800">Delivery Details</h2>
        </div>
        <div className="h-px bg-slate-200" />
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="delivery-title" className="text-sm font-medium text-slate-700">Delivery Title</Label>
          <Input 
            id="delivery-title"
            placeholder="e.g., Final Logo Design Package"
            value={deliveryTitle}
            onChange={(e) => setDeliveryTitle(e.target.value)}
            className="border-slate-300 focus:border-purple-400 focus:ring-purple-400"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-5 w-5 rounded-full bg-purple-50 flex items-center justify-center">
              <MessageSquare className="h-3 w-3 text-purple-600" />
            </div>
            <Label htmlFor="message" className="text-sm font-medium text-slate-700">Message to Customer</Label>
          </div>
          <Textarea
            id="message"
            placeholder="Write a detailed message explaining what you're delivering..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-32 border-slate-300 focus:border-purple-400 focus:ring-purple-400"
          />
          <p className="text-sm text-slate-500 mt-1">
            Include any important instructions or information about the delivered files.
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-5 w-5 rounded-full bg-purple-50 flex items-center justify-center">
              <Upload className="h-3 w-3 text-purple-600" />
            </div>
            <Label className="text-sm font-medium text-slate-700">Upload Deliverables</Label>
          </div>
          <AttachmentUploader onFileChange={handleFileChange} />
        </div>
        
        <div className="flex items-center space-x-2 ml-1">
          <Input
            type="checkbox"
            id="extra-revisions"
            className="w-4 h-4 border-slate-300 rounded text-purple-600 focus:ring-purple-500"
            checked={extraRevisions}
            onChange={(e) => setExtraRevisions(e.target.checked)}
          />
          <Label htmlFor="extra-revisions" className="text-sm font-medium text-slate-700">
            Offer additional revisions if needed
          </Label>
        </div>
      </div>
      
      <div>
        <Button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5"
        >
          Deliver Now
        </Button>
      </div>
    </form>
  );
};

export default DeliveryForm;
