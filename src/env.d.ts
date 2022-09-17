declare namespace NodeJS {
  export interface ProcessEnv {
    // Port
    PORT: string;
    // Database
    DATABASE_URL: string;
    SHADOW_DATABASE_URL: string;
    // Secrets
    JWT_SECRET: string;
    SESSION_SECRET: string;
  }
}
