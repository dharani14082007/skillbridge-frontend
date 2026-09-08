import React from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  closeable?: boolean;
}

const alertConfig = {
  success: {
    bg: 'bg-success-50',
    border: 'border-success-200',
    text: 'text-success-800',
    icon: '✓',
  },
  error: {
    bg: 'bg-danger-50',
    border: 'border-danger-200',
    text: 'text-danger-800',
    icon: '✕',
  },
  warning: {
    bg: 'bg-warning-50',
    border: 'border-warning-200',
    text: 'text-warning-800',
    icon: '⚠',
  },
  info: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-800',
    icon: 'ℹ',
  },
};

export const Alert: React.FC<AlertProps> = ({
  type,
  message,
  onClose,
  closeable = true,
}) => {
  const config = alertConfig[type];

  return (
    <div
      className={`${config.bg} ${config.border} ${config.text} border rounded-lg p-4 flex items-start justify-between`}
      role="alert"
    >
      <div className="flex items-start space-x-3">
        <span className="flex-shrink-0 font-bold text-lg">{config.icon}</span>
        <p className="text-sm">{message}</p>
      </div>
      {closeable && onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
        >
          ✕
        </button>
      )}
    </div>
  );
};