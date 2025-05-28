"use client"
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

// Register Radar chart components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Define props (optional for reuse, otherwise use static data)
interface UsageRadarProps {
  labels?: string[];
  dataPoints?: number[];
  title?: string;
}

const UsageRadar: React.FC<UsageRadarProps> = ({
  labels = ['Marketing', 'Sales', 'Engineering', 'Support', 'Finance', 'HR'],
  dataPoints = [65, 59, 90, 81, 56, 55],
  title = 'Domain-Specific Usage'
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Usage by Department',
        data: dataPoints,
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        pointBackgroundColor: 'rgba(34, 202, 236, 1)'
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { backdropColor: 'transparent' }
      }
    },
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: title }
    }
  };

  return (
    <div className="col-span-12 md:col-span-6 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
        <div className="mt-6 h-96">
          <Radar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default UsageRadar;
