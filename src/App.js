import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/Root";

import ErrorPage from "./pages/Error";
import OverviewPage from "./pages/Overview.js";
import AnalyticsPage from "./pages/Analytics.js";
import ContentCalendarPage from "./pages/ContentCalendar.js";
import AggregatorPage from "./pages/Aggregator.js";
import SchedulePostsPage from "./pages/SchedulePosts.js";
import SettingsPage from "./pages/Settings.js";

import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "aggregator", element: <AggregatorPage /> },
      { path: "content-calendar", element: <ContentCalendarPage /> },
      { path: "schedule-posts", element: <SchedulePostsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
