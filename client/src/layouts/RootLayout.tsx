import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router";

declare global {
  interface Window {
    ENV: {
      VITE_CLERK_PUBLISHABLE_KEY: string;
      VITE_APP_API_BASE_URL: string;
    };
  }
}

const PUBLISHABLE_KEY =
  window.ENV?.VITE_CLERK_PUBLISHABLE_KEY ||
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  if (!PUBLISHABLE_KEY) {
    return (
      <div>
        Error: Application is not configured correctly. Please try again later.
      </div>
    );
  }

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <Outlet />
    </ClerkProvider>
  );
}
