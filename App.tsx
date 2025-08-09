import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import { SocketProvider } from './context/SocketContext';
import PrivateRoute from './components/common/PrivateRoute';
import Layout from './components/common/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import ProductList from './components/products/ProductList';
import ProductForm from './components/products/ProductForm';
import ProductDetail from './components/products/ProductDetail';
import SupplierList from './components/suppliers/SupplierList';
import SupplierForm from './components/suppliers/SupplierForm';
import PurchaseOrderList from './components/purchases/PurchaseOrderList';
import PurchaseOrderForm from './components/purchases/PurchaseOrderForm';
import SalesOrderList from './components/sales/SalesOrderList';
import SalesOrderForm from './components/sales/SalesOrderForm';
import WarrantyList from './components/warranty/WarrantyList';
import WarrantyForm from './components/warranty/WarrantyForm';
import StockReport from './components/reports/StockReport';
import SalesReport from './components/reports/SalesReport';
import ProfitReport from './components/reports/ProfitReport';
import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <SocketProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/" exact component={Dashboard} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/products" exact component={ProductList} />
              <PrivateRoute path="/products/new" component={ProductForm} />
              <PrivateRoute path="/products/:id" exact component={ProductDetail} />
              <PrivateRoute path="/products/:id/edit" component={ProductForm} />
              <PrivateRoute path="/suppliers" exact component={SupplierList} />
              <PrivateRoute path="/suppliers/new" component={SupplierForm} />
              <PrivateRoute path="/suppliers/:id/edit" component={SupplierForm} />
              <PrivateRoute path="/purchases" exact component={PurchaseOrderList} />
              <PrivateRoute path="/purchases/new" component={PurchaseOrderForm} />
              <PrivateRoute path="/purchases/:id/edit" component={PurchaseOrderForm} />
              <PrivateRoute path="/sales" exact component={SalesOrderList} />
              <PrivateRoute path="/sales/new" component={SalesOrderForm} />
              <PrivateRoute path="/sales/:id/edit" component={SalesOrderForm} />
              <PrivateRoute path="/warranty" exact component={WarrantyList} />
              <PrivateRoute path="/warranty/new" component={WarrantyForm} />
              <PrivateRoute path="/warranty/:id/edit" component={WarrantyForm} />
              <PrivateRoute path="/reports/stock" component={StockReport} />
              <PrivateRoute path="/reports/sales" component={SalesReport} />
              <PrivateRoute path="/reports/profit" component={ProfitReport} />
            </Switch>
          </Router>
        </SocketProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;