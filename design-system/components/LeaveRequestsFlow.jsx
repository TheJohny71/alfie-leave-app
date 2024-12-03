import React, { useState } from 'react';
import { ChevronRight, AlertCircle } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import DatePicker from './DatePicker';

const LeaveRequestFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: null,
    endDate: null,
    reason: '',
    handover: '',
  });

  const leaveTypes = [
    { id: 'annual', label: 'Annual Leave', balance: '15 days' },
    { id: 'sick', label: 'Sick Leave', balance: '10 days' },
    { id: 'personal', label: 'Personal Leave', balance: '5 days' },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {['Leave Type', 'Dates', 'Details', 'Review'].map((label, index) => (
            <div key={label} className="flex items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${step > index + 1 ? 'bg-green-500 text-white' : 
                  step === index + 1 ? 'bg-blue-600 text-white' : 
                  'bg-gray-200 text-gray-600'}
              `}>
                {step > index + 1 ? '✓' : index + 1}
              </div>
              {index < 3 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Select Leave Type</h2>
            <div className="grid gap-4">
              {leaveTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => handleInputChange('leaveType', type.id)}
                  className={`
                    p-4 rounded-lg border text-left transition-all
                    ${formData.leaveType === type.id 
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-50' 
                      : 'border-gray-200 hover:border-blue-500'}
                  `}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900">{type.label}</h3>
                      <p className="text-sm text-gray-500">Balance: {type.balance}</p>
                    </div>
                    {formData.leaveType === type.id && (
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Select Dates</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>
                <DatePicker 
                  selected={formData.startDate}
                  onChange={date => handleInputChange('startDate', date)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>
                <DatePicker 
                  selected={formData.endDate}
                  onChange={date => handleInputChange('endDate', date)}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Leave Details</h2>
            <div className="space-y-4">
              <Input
                label="Reason for Leave"
                placeholder="Brief description of your leave"
                value={formData.reason}
                onChange={e => handleInputChange('reason', e.target.value)}
              />
              <Input
                label="Handover Notes"
                placeholder="Any important handover information"
                value={formData.handover}
                onChange={e => handleInputChange('handover', e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Review Request</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Leave Type</p>
                  <p className="font-medium text-gray-900">
                    {leaveTypes.find(t => t.id === formData.leaveType)?.label}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium text-gray-900">
                    {formData.startDate && formData.endDate ? 
                      `${formData.startDate} - ${formData.endDate}` : 
                      'Dates not selected'}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Reason</p>
                  <p className="font-medium text-gray-900">{formData.reason}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Handover Notes</p>
                  <p className="font-medium text-gray-900">{formData.handover}</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                Your request will be sent to your manager for approval. 
                You'll receive a notification once it's reviewed.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex justify-between">
          {step > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          <div className="ml-auto">
            {step < 4 ? (
              <Button variant="primary" onClick={handleNext}>
                Continue
              </Button>
            ) : (
              <Button variant="primary" onClick={handleSubmit}>
                Submit Request
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequestFlow;
