
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileText, X, Upload } from "lucide-react";

interface AttachmentUploaderProps {
  onFileChange: (files: File[]) => void;
}

const AttachmentUploader = ({ onFileChange }: AttachmentUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => {
        const updated = [...prev, ...newFiles];
        onFileChange(updated);
        return updated;
      });
    }
  };
  
  const removeFile = (index: number) => {
    setFiles(prev => {
      const updated = prev.filter((_, i) => i !== index);
      onFileChange(updated);
      return updated;
    });
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };
  
  return (
    <div className="space-y-4">
      <div 
        className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          multiple
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileInput}
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center">
            <Upload className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-sm font-medium text-slate-700">
            Drag files here or <span className="text-purple-600">browse</span>
          </p>
          <p className="text-xs text-slate-500">
            Upload any file type up to 50MB
          </p>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-700">
            {files.length} {files.length === 1 ? "file" : "files"} attached
          </p>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-md border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 truncate max-w-[200px]">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
        onClick={() => fileInputRef.current?.click()}
      >
        Add More Files
      </Button>
    </div>
  );
};

export default AttachmentUploader;
