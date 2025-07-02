import { Navbar } from "@/widgets/Navbar";
import { useInitAuthData } from "@/features/auth/jwt/hooks/useInitAuthData";
import { AppRouter } from "@/app/providers/RouterProvider";

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export const App = () => {
  useInitAuthData();

  return(
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}
