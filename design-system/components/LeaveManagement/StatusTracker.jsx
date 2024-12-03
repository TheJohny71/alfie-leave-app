import React from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const LeaveStatusTracker = ({ requests }) => {
  const getStatusIcon = (status) => {
    const icons = {
      pending: <Clock className="w-5 h-5 text-yellow-500" />,
      approved: <CheckCircle className="w-5 h-5 text-green-500" />,
      rejected: <XCircle className="w-5 h-5 text-red-500" />,
      review: <AlertCircle className="w-5 h-5 text-blue-500" />
    };
    return icons[status] || icons.pending;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Leave Requests</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {requests.map((request, index) => (
          <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">{request.type}</h3>
                <p className="text-sm text-gray-500">
                  {request.startDate} - {request.endDate}
                </p>
                <div className="flex items-center gap-2">
                  {getStatusIcon(request.status)}
                  <span className={`text-sm capitalize
                    ${request.status === 'approved' ? 'text-green-700' : ''}
                    ${request.status === 'rejected' ? 'text-red-700' : ''}
                    ${request.status === 'pending' ? 'text-yellow-700' : ''}
                    ${request.status === 'review' ? 'text-blue-700' : ''}
                  `}>
                    {request.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Requested on</span>
                <p className="text-sm font-medium text-gray-900">{request.requestDate}</p>
              </div>
            </div>
            {request.notes && (
              <p className="mt-3 text-sm text-gray-600">{request.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveStatusTracker;
