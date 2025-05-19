
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
          Deliver Your Work to Customers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Seamlessly deliver your completed orders and add personalized notes to ensure customer satisfaction.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
          <Link to="/delivery">
            Go to Delivery Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
