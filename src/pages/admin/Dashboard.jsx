import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp,
  Activity,
  Calendar,
  Download,
  MoreVertical
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '3,248',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Revenue',
      value: '$24,580',
      change: '+8.2%',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Total Orders',
      value: '1,248',
      change: '-3.4%',
      icon: ShoppingBag,
      color: 'bg-purple-500',
    },
    {
      title: 'Growth',
      value: '24.5%',
      change: '+4.3%',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2024-01-15', amount: '$249.99', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2024-01-14', amount: '$149.99', status: 'Pending' },
    { id: '#ORD-003', customer: 'Robert Johnson', date: '2024-01-14', amount: '$89.99', status: 'Completed' },
    { id: '#ORD-004', customer: 'Sarah Williams', date: '2024-01-13', amount: '$199.99', status: 'Processing' },
    { id: '#ORD-005', customer: 'Michael Brown', date: '2024-01-13', amount: '$299.99', status: 'Completed' },
  ];

  const topProducts = [
    { name: 'Premium Headphones', sales: 342, revenue: '$12,480' },
    { name: 'Smart Watch', sales: 278, revenue: '$8,340' },
    { name: 'Laptop Stand', sales: 189, revenue: '$5,670' },
    { name: 'Wireless Mouse', sales: 156, revenue: '$3,120' },
    { name: 'USB-C Hub', sales: 134, revenue: '$2,680' },
  ];

  // Simple chart data
  const chartData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 },
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back! happening with your store today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            This Month
          </button>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <Activity className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">from last month</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </button>
          </div>
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
                        <div className="absolute bottom-full mb-2 hidden group-hover:block">
                          <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            {item.month}: ${item.revenue.toLocaleString()}
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.month}</span>
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
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h2>
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{product.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">{product.revenue}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;