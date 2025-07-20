// import { Provider } from "react-redux";
// import Body from "./Components/Body";
// import appStore from "./Utils/appStore";

// function App() {
//   return (
//     <>
//     <Provider store={appStore}> <Body/> </Provider>  
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Activity, 
  Bell, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit,
  Trash2,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Stethoscope,
  Bed,
  Pill,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Mock Data
const mockData = {
  users: [
    { id: 1, name: 'Dr. Sarah Wilson', email: 'sarah.wilson@hospital.com', role: 'Doctor', department: 'Cardiology', phone: '+1-555-0101', status: 'active' },
    { id: 2, name: 'John Smith', email: 'john.smith@hospital.com', role: 'Patient', department: null, phone: '+1-555-0102', status: 'active' },
    { id: 3, name: 'Nurse Maria Garcia', email: 'maria.garcia@hospital.com', role: 'Nurse', department: 'Emergency', phone: '+1-555-0103', status: 'active' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@hospital.com', role: 'Patient', department: null, phone: '+1-555-0104', status: 'inactive' }
  ],
  appointments: [
    { id: 1, patientName: 'John Smith', doctorName: 'Dr. Sarah Wilson', date: '2025-07-21', time: '09:00', type: 'Consultation', status: 'scheduled' },
    { id: 2, patientName: 'Emily Johnson', doctorName: 'Dr. Michael Brown', date: '2025-07-21', time: '14:30', type: 'Follow-up', status: 'completed' },
    { id: 3, patientName: 'Robert Davis', doctorName: 'Dr. Sarah Wilson', date: '2025-07-22', time: '11:00', type: 'Check-up', status: 'scheduled' }
  ],
  doctors: [
    { id: 1, name: 'Dr. Sarah Wilson', specialty: 'Cardiology', experience: '12 years', patients: 156, rating: 4.9 },
    { id: 2, name: 'Dr. Michael Brown', specialty: 'Neurology', experience: '8 years', patients: 89, rating: 4.7 },
    { id: 3, name: 'Dr. Lisa Chen', specialty: 'Pediatrics', experience: '15 years', patients: 203, rating: 4.8 }
  ],
  stats: {
    totalPatients: 1247,
    totalDoctors: 45,
    todayAppointments: 23,
    availableBeds: 12
  }
};

// Header Component
const Header = ({ user, onLogout }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">MediCare HMS</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <Settings className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">{user.name}</span>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
        >
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </div>
  </header>
);

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, userRole }) => {
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'patients', label: 'Patients', icon: User },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  const userMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, color = 'blue', trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {trend && (
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">{trend}</span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-full bg-${color}-100`}>
        <Icon className={`h-6 w-6 text-${color}-600`} />
      </div>
    </div>
  </div>
);

// Dashboard Component
const Dashboard = ({ userRole }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      <div className="text-sm text-gray-500">
        {new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>

    {userRole === 'admin' && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Patients"
          value={mockData.stats.totalPatients.toLocaleString()}
          icon={Users}
          color="blue"
          trend="+12% from last month"
        />
        <StatsCard
          title="Total Doctors"
          value={mockData.stats.totalDoctors}
          icon={Stethoscope}
          color="green"
        />
        <StatsCard
          title="Today's Appointments"
          value={mockData.stats.todayAppointments}
          icon={Calendar}
          color="purple"
        />
        <StatsCard
          title="Available Beds"
          value={mockData.stats.availableBeds}
          icon={Bed}
          color="orange"
        />
      </div>
    )}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Appointments</h3>
        <div className="space-y-4">
          {mockData.appointments.slice(0, 3).map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{appointment.patientName}</p>
                <p className="text-sm text-gray-600">{appointment.doctorName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                <p className="text-sm text-gray-600">{appointment.time}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Plus className="h-6 w-6 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-blue-900">New Appointment</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <User className="h-6 w-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-green-900">Add Patient</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FileText className="h-6 w-6 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-purple-900">Generate Report</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Bed className="h-6 w-6 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-orange-900">Bed Management</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Users Management Component
const UsersManagement = () => {
  const [users, setUsers] = useState(mockData.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'Doctor' ? 'bg-green-100 text-green-800' :
                      user.role === 'Nurse' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{user.department || 'N/A'}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Appointments Component
const AppointmentsManagement = () => {
  const [appointments, setAppointments] = useState(mockData.appointments);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>New Appointment</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Patient</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Doctor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{appointment.patientName}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.doctorName}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.date}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.time}</td>
                  <td className="py-3 px-4 text-gray-600">{appointment.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                      appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-green-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Doctors Component
const DoctorsManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Doctors</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>Add Doctor</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Experience:</span>
                <span className="font-medium">{doctor.experience}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Patients:</span>
                <span className="font-medium">{doctor.patients}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rating:</span>
                <span className="font-medium text-yellow-600">★ {doctor.rating}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                View Profile
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Edit className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Login Component
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '', role: 'admin' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock authentication
    const user = {
      name: credentials.role === 'admin' ? 'Admin User' : 'John Doe',
      email: credentials.email,
      role: credentials.role
    };
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Activity className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">MediCare HMS</h1>
          <p className="text-gray-600 mt-2">Hospital Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Login as</label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={credentials.role}
              onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Email: admin@hospital.com | Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard userRole={user.role} />;
      case 'users':
        return <UsersManagement />;
      case 'appointments':
        return <AppointmentsManagement />;
      case 'doctors':
        return <DoctorsManagement />;
      case 'patients':
        return <div className="text-center py-12 text-gray-500">Patients management component coming soon...</div>;
      case 'reports':
        return <div className="text-center py-12 text-gray-500">Reports component coming soon...</div>;
      case 'profile':
        return <div className="text-center py-12 text-gray-500">Profile component coming soon...</div>;
      default:
        return <Dashboard userRole={user.role} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} userRole={user.role} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
