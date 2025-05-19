
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Deliver Your Work to Customers
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Seamlessly deliver your completed orders and add personalized notes to ensure customer satisfaction.
        </p>
        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
          <Link to="/delivery" className="flex items-center">
            Go to Delivery Page
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
