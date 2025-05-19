
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
          Deliver Your Work to Customers
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Seamlessly deliver your completed orders and add personalized notes to ensure customer satisfaction.
        </p>
        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
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
