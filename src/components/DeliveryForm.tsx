
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import AttachmentUploader from "./AttachmentUploader";
import { Package, Truck, MessageSquare } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-medium">Delivery Details</h2>
        </div>
        <div className="h-px bg-gray-200" />
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="delivery-title">Delivery Title</Label>
          <Input 
            id="delivery-title"
            placeholder="e.g., Final Logo Design Package"
            value={deliveryTitle}
            onChange={(e) => setDeliveryTitle(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-4 w-4 text-purple-600" />
            <Label htmlFor="message">Message to Customer</Label>
          </div>
          <Textarea
            id="message"
            placeholder="Write a detailed message explaining what you're delivering..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-32"
          />
          <p className="text-sm text-gray-500 mt-2">
            Include any important instructions or information about the delivered files.
          </p>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Truck className="h-4 w-4 text-purple-600" />
            <Label>Upload Deliverables</Label>
          </div>
          <AttachmentUploader onFileChange={handleFileChange} />
        </div>
        
        <div className="flex items-center space-x-2">
          <Input
            type="checkbox"
            id="extra-revisions"
            className="w-4 h-4"
            checked={extraRevisions}
            onChange={(e) => setExtraRevisions(e.target.checked)}
          />
          <Label htmlFor="extra-revisions" className="text-sm font-normal">
            Offer additional revisions if needed
          </Label>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      >
        Deliver Now
      </Button>
    </form>
  );
};

export default DeliveryForm;
