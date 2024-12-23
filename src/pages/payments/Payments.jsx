import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Calendar,
  CreditCard,
  UserCircle,
  LogOut,
  CheckCircle
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Payments = ({ paymentsData, subscription }) => {
  // Sample subscription data
 
  return (
    <div className="space-y-6">
      {/* Subscription Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Current Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Plan</p>
              <p className="font-medium">{subscription.plan}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Amount</p>
              <p className="font-medium">{subscription.amount} <b>KES</b></p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Billing Cycle</p>
              <p className="font-medium">{subscription.interval}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Status</p>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <p className="font-medium">{subscription.status}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Next billing date: {subscription?.next_payment}
          </div>
        </CardContent>
      </Card>

      {/* Payment History Card */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th>#</th>
                  <th className="px-6 py-3">Date Expected</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentsData.map((payment, index) => (
                  <tr key={payment.id} className="bg-white border-b">
                    <td>{index + 1}</td>
                    <td className="px-6 py-4">{payment.expected_date}</td>
                    <td className="px-6 py-4">{payment.amount} <b>KES</b></td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;