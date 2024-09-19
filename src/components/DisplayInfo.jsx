import { IconCircleDashedCheck, IconHourglassHigh, IconUserScan } from '@tabler/icons-react';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DisplayInfo = () => {
  const Navigate = useNavigate();
  const [metrics, setMetrics] = useState({
    totalFolder: 0,
    aiPersonalizedTreatment: 0,
    totalScreenings: 0,
    completedScreenings: 0,
    pendingScreenings: 0,
    overdueScreenings: 0,
  });
  const metricsData = [
    {
      title: "Specialist Appointments Pending",
      subtitle: "View Details",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onclick: () => {
        Navigate('/appointments/pending');
      }

    },
    {
      title: "Treatment Progress Updates",
      subtitle: "View Details",
      value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
      icon: IconCircleDashedCheck,
      onclick: () => {
        Navigate('/folders');
      }

    },
    {
      title: "Total Folders",
      subtitle: "View Details",
      value: metrics.totalFolder,
      icon: IconCircleDashedCheck,
      onclick: () => {
        Navigate('/folders');
      }

    },
    {
      title: "Total Screenings",
      subtitle: "View Details",
      value: metrics.totalScreenings,
      icon: IconUserScan,
      onclick: () => {
        Navigate('/screening');
      }

    },
    {
      title: "Completed Screenings",
      subtitle: "View Details",
      value: metrics.completedScreenings,
      icon: IconUserScan,
      onclick: () => {
        Navigate('/screening/completed');
      }

    },
    {
      title: "Pending Screenings",
      subtitle: "View Details",
      value: metrics.pendingScreenings,
      icon: IconHourglassHigh,
      onclick: () => {
        Navigate('/screening/pending');
      }

    },
    {
      title: "Overdue Screenings",
      subtitle: "View Details",
      value: metrics.overdueScreenings,
      icon: IconUserScan,
      onclick: () => {
        Navigate('/screening/overdue');
      }

    },
  ];


}

export default DisplayInfo