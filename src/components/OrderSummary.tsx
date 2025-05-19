
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
    <Card className="shadow-sm border-slate-200 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-slate-50 border-b pb-5">
        <CardTitle className="text-lg flex justify-between items-center">
          <span className="text-slate-800">Order Summary</span>
          <Badge variant="outline" className="bg-white border-indigo-200 text-indigo-700 font-normal">
            {orderDetails.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6 p-6">
        <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
          <div className="h-12 w-12 rounded-full overflow-hidden border border-slate-200">
            <img
              src={orderDetails.customer.avatar}
              alt={orderDetails.customer.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-slate-500">Customer</p>
            <p className="text-base font-medium text-slate-800">{orderDetails.customer.name}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-slate-500">Order ID</p>
            <p className="text-sm font-medium text-slate-700 text-right">{orderDetails.orderId}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-slate-500">Service</p>
            <p className="text-sm font-medium text-slate-700 text-right">{orderDetails.service}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-slate-500">Amount</p>
            <p className="text-sm font-medium text-slate-700 text-right">{orderDetails.price}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-1">
            <p className="text-sm text-slate-500">Due Date</p>
            <p className="text-sm font-medium text-slate-700 text-right">
              {new Date(orderDetails.dueDate).toLocaleDateString()}
            </p>
          </div>
          
          <div className="pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-slate-700 font-medium">Delivery Deadline</p>
              <Badge className={
                daysLeft() <= 1
                  ? "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                  : daysLeft() <= 3
                  ? "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                  : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
              }>
                {daysLeft()} days left
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
