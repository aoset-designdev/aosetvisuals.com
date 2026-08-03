/// <reference types="astro/client" />

// Declare CSS modules for side-effect imports using aliases
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}