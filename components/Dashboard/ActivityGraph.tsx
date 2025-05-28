"use client"

import React from 'react'
import { FiUser } from 'react-icons/fi'
import {
  Line
} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'User Activity',
      data: [12, 19, 3, 5, 2, 3, 9],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.3
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Weekly User Activity'
    }
  }
}

const ActivityGraph = () => {
  return (
    <div className="col-span-12 md:col-span-6 overflow-hidden rounded border border-stone-300">

      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
        <div className="mt-4">
          <Line data={data}/>
        </div>
      </div>
    </div>
  )
}

export default ActivityGraph
