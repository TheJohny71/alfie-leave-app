import React, { useState } from 'react';
import { Users, Calendar, MessageSquare } from 'lucide-react';
import Button from './Button';
import Input from './Input';

const LeaveApproval = ({ request, onApprove, onReject }) => {
  const [comments, setComments] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Request Details */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Leave Request</h2>
          <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800">
            Pending Approval
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Employee</p>
              <p className="font-medium text-gray-900">{request.employee}</p>
              <p className="text-sm text-gray-500">{request.department}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="text-sm text-gray-500">Leave Period</p>
              <p className="font-medium text-gray-900">
                {request.startDate} - {request.endDate}
              </p>
              <p className="text-sm text-gray-500">{request.duration} days</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Reason</h3>
          <p className="text-sm text-gray-600">{request.reason}</p>
        </div>
      </div>

      {/* Team Impact */}
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Team Coverage</h3>
        <div className="space-y-3">
          {request.teamCoverage.map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`/api/placeholder/32/32`}
                  alt={member.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-900">
                  {member.name}
                </span>
              </div>
              <span className={`text-sm ${
                member.available ? 'text-green-600' : 'text-red-600'
              }`}>
                {member.available ? 'Available' : 'On Leave'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Approval Actions */}
      <div className="p-6">
        <div className="space-y-4">
          <Input
            label="Comments"
            placeholder="Add your comments (optional)"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            icon={<MessageSquare className="w-4 h-4 text-gray-400" />}
          />
          
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              onClick={() => onApprove(comments)}
              className="w-full"
            >
              Approve
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowConfirm(true)}
              className="w-full"
            >
              Reject
            </Button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Confirm Rejection
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to reject this leave request? 
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <Button
                variant="secondary"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  onReject(comments);
                  setShowConfirm(false);
                }}
              >
                Confirm Reject
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveApproval;
