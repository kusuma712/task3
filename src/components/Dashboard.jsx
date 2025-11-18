import React from 'react'
import useDashboardData from '../hooks/useDashboardData'
import SummaryCard from './SummaryCard'
import UsersTable from './UsersTable'
import Alerts from './Alerts'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function Dashboard(){
  const { data, error, loading } = useDashboardData()

  if(loading) return <div className="text-center py-5">Loading dashboard...</div>
  if(error) return <div className="alert alert-danger">Failed to load data: {error.message}</div>
  if(!data) return null

  const chartData = {
    labels: data.chart.labels,
    datasets: [{
      label: 'Visits',
      data: data.chart.values,
      fill: true,
      tension: 0.35,
      borderWidth: 2,
      backgroundColor: 'rgba(31,111,235,0.12)',
      borderColor: 'rgba(31,111,235,0.9)'
    }]
  }

  return (
    <div className="dashboard">
      <div className="page-heading mb-3">
        <h3>Analytics Overview</h3>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-6 col-md-3"><SummaryCard label="Total Users" value={data.summary.totalUsers} /></div>
        <div className="col-6 col-md-3"><SummaryCard label="Active Today" value={data.summary.activeToday} /></div>
        <div className="col-6 col-md-3"><SummaryCard label="New Signups" value={data.summary.newSignups} /></div>
        <div className="col-6 col-md-3"><SummaryCard label="Revenue Today" value={data.summary.revenueToday} isCurrency /></div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-header">Weekly Visits</div>
            <div className="card-body" style={{height:260}}>
              <Line data={chartData} options={{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}} />
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <Alerts alerts={data.alerts} />
        </div>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-12">
          <UsersTable users={data.recentUsers} />
        </div>
      </div>
    </div>
  )
}
