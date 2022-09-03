import AuthProvider from './context/AuthProvider';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
