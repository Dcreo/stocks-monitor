import { Navbar } from "@/widgets/Navbar";
import { useInitAuthData } from "@/features/auth/jwt/hooks/useInitAuthData";
import { AppRouter } from "@/app/providers/RouterProvider";

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { PriceUpdateProgress } from "@/widgets";
import { ToastContainer } from "react-toastify";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export const App = () => {
  useInitAuthData();

  return(
    <div>
      <Navbar />
      <AppRouter />
      <ToastContainer 
        position="bottom-right"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
