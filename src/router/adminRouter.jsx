import AdminLayout from "@/components/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import Products from "@/pages/admin/Products";
import Orders from "@/pages/admin/Orders";
import Payments from "@/pages/admin/Payments";
import Analytics from "@/pages/admin/Analytics";
import Settings from "@/pages/admin/Settings";
import Help from "@/pages/admin/Help";

const adminRouter = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "payments", element: <Payments /> },
      { path: "analytics", element: <Analytics /> },
      { path: "settings", element: <Settings /> },
      { path: "help", element: <Help /> },
    ]
  }
];

export default adminRouter;