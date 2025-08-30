import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationProps {
  currentPath: string;
}

export const Navigation = ({ currentPath }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/farmer-input", name: "Farmer Input" },
    { path: "/proofs", name: "My Proofs" }, 
    { path: "/dashboard", name: "Dashboard" }
  ];

  const currentIndex = routes.findIndex(route => route.path === currentPath);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < routes.length - 1;

  const goBack = () => {
    if (canGoBack) {
      navigate(routes[currentIndex - 1].path);
    }
  };

  const goForward = () => {
    if (canGoForward) {
      navigate(routes[currentIndex + 1].path);
    }
  };

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Home Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goBack}
              disabled={!canGoBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant="outline" 
              size="sm"
              onClick={goForward}
              disabled={!canGoForward}
              className="flex items-center gap-2"
            >
              Forward
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};