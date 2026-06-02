import { createFileRoute, Navigate } from "@tanstack/react-router";

const Route = createFileRoute("/")({ component: Index });

function Index() {
  return <Navigate to="/home" />;
}

export { Route };
