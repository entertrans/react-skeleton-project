import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartComponent = () => {
  const data = [
    { month: 'Jan', revenue: 4000, users: 2400 },
    { month: 'Feb', revenue: 3000, users: 1398 },
    { month: 'Mar', revenue: 9800, users: 2000 },
    { month: 'Apr', revenue: 3908, users: 2780 },
    { month: 'May', revenue: 4800, users: 1890 },
    { month: 'Jun', revenue: 3800, users: 2390 },
    { month: 'Jul', revenue: 4300, users: 3490 },
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.1} />
          <XAxis 
            dataKey="month" 
            stroke="#6B7280"
            tick={{ fill: '#6B7280' }}
          />
          <YAxis 
            stroke="#6B7280"
            tick={{ fill: '#6B7280' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              color: '#111827'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3B82F6" 
            strokeWidth={2}
            dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#10B981" 
            strokeWidth={2}
            dot={{ stroke: '#10B981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;