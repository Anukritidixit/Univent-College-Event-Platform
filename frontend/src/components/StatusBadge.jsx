import React from 'react';

const StatusBadge = ({ status, isAudition, isOpen }) => {
  if (status === 'REGISTERED') {
    return <span className="px-2 py-1 text-xs font-bold text-green-700 bg-green-100 rounded-full border border-green-200">✓ Registered</span>;
  }
  if (status === 'PENDING') {
    return <span className="px-2 py-1 text-xs font-bold text-amber-700 bg-amber-100 rounded-full border border-amber-200">⚠ Audition Pending</span>;
  }
  if (!isOpen) {
    return <span className="px-2 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full border border-red-200">Closed</span>;
  }
  if (isAudition) {
    return <span className="px-2 py-1 text-xs font-bold text-purple-700 bg-purple-100 rounded-full border border-purple-200">Audition Required</span>;
  }
  return <span className="px-2 py-1 text-xs font-bold text-blue-700 bg-blue-100 rounded-full border border-blue-200">Open</span>;
};

export default StatusBadge;