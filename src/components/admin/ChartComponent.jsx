// ChartComponent.jsx sederhana tanpa recharts terlebih dahulu

const ChartComponent = () => {
  // Data dummy untuk chart
  const chartData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
  ];

  // Cari nilai maksimum untuk scaling
  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <div className="h-80">
      <div className="flex items-end justify-between h-64 mb-6">
        {chartData.map((item, index) => {
          const height = (item.revenue / maxRevenue) * 100;
          return (
            <div key={index} className="flex flex-col items-center w-full">
              <div className="relative flex flex-col items-center group">
                <div 
                  className="w-10 bg-gradient-to-t from-primary-500 to-primary-600 rounded-t-lg transition-all hover:from-primary-600 hover:to-primary-700"
                  style={{ height: `${height}%` }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block">
                    <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      {item.name}: ${item.revenue.toLocaleString()}
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
            </div>
          );
        })}
      </div>
      
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Users</span>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;