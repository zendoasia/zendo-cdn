export function respond(message, code, { ...options } = {}) {
  return new Response(
    JSON.stringify({
      code,
      message,
      ...options,
    }),
    {
      status: code,
      headers: { "Content-Type": "application/json" },
    }
  );
}
