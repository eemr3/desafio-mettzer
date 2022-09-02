import AuthProvider from './context/AuthProvider';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="h-screen">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
