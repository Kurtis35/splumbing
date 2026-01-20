import { QueryClient, QueryFunction } from "@tanstack/react-query";

export const apiRequest = async (method: string, url: string, data?: any) => {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(error.message || res.statusText);
  }

  return res;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = Array.isArray(queryKey) ? queryKey.join("/") : queryKey;
        const res = await fetch(url as string);
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      },
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
