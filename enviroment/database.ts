export const host      = Deno.env.get("SURREAL_HOST") ?? "http://localhost";
export const port      = Deno.env.get("SURREAL_PORT") ?? "8080";
export const namespace = Deno.env.get("SURREAL_NAMESPACE") ?? "Learning";
export const database  = Deno.env.get("SURREAL_DATABASE") ?? "Fresh";
export const user      = Deno.env.get("SURREAL_USERNAME") ?? "root";
export const pass      = Deno.env.get("SURREAL_DB_PASSWORD") ?? "root";
