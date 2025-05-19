
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OrderSummary = () => {
  // This would typically come from an API in a real application
  const orderDetails = {
    orderId: "ORD-38291",
    customer: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    service: "Logo Design Package",
    price: "$120.00",
    dueDate: "2025-05-24",
    status: "In Progress",
  };
  
  const daysLeft = () => {
    const due = new Date(orderDetails.dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  return (
    <Card className="shadow-md border-0">
      <CardHeader className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border-b pb-4">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Order Summary</span>
          <Badge variant="outline" className="bg-white text-purple-700 font-normal">
            {orderDetails.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-5">
        <div className="flex items-center space-x-4 pb-4 border-b border-gray-100">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src={orderDetails.customer.avatar}
              alt={orderDetails.customer.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Customer</p>
            <p className="text-base">{orderDetails.customer.name}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="text-sm font-medium">{orderDetails.orderId}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Service</p>
            <p className="text-sm font-medium">{orderDetails.service}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Amount</p>
            <p className="text-sm font-medium">{orderDetails.price}</p>
          </div>
          
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Due Date</p>
            <p className="text-sm font-medium">
              {new Date(orderDetails.dueDate).toLocaleDateString()}
            </p>
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <p className="text-sm text-gray-500">Delivery Deadline</p>
            <Badge className={
              daysLeft() <= 1
                ? "bg-red-100 text-red-800 hover:bg-red-200"
                : daysLeft() <= 3
                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }>
              {daysLeft()} days left
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
