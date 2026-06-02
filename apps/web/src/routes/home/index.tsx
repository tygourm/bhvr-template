import { ApiResponseSchema } from "@bhvr-template/shared";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Spinner } from "@/components/ui/spinner";

const Route = createFileRoute("/home/")({ component: Index });

function Index() {
  const { data: response, isPending } = useQuery({
    queryKey: ["response"] as const,
    queryFn: () =>
      fetch("/api")
        .then((res) => res.json())
        .then((json) => ApiResponseSchema.parse(json)),
  });

  if (isPending) return <Spinner />;
  if (!response?.success) return <p>{response?.message}</p>;
  return <p>{response?.data.id}</p>;
}

export { Route };
