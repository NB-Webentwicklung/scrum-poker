import * as z from "zod";

export function handleApiError(error: unknown, consoleErrorPrefix: string) {
  if (error instanceof z.ZodError) {
    return new Response(JSON.stringify({ errors: error.issues }), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  console.error(consoleErrorPrefix, error);
  return new Response(JSON.stringify({ error: "Internal Server Error" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
