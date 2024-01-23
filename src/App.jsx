import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard,DashboardStudent, Auth} from "@/layouts";
import { MainPage } from "./layouts/mainpage";
import Error from "./Error";

const Routing = () => {
  return (
      <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboardstudent/*" element={<DashboardStudent />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

function App() {
  return (
   <>
   <Routing />
   </>
  );
}

export default App;
