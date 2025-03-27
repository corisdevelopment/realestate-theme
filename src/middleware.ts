import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    return await next();
  } catch (e) {
    // Handle errors
    return context.rewrite("/404");
    
  }
});