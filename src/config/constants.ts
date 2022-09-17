// App config
export const APP_NAME = 'Red';
export const VERISON = '1.0.0';

// Dev checking
export const __prod__ = process.env.NODE_ENV === 'production';
export const __dev__ = !__prod__;

// Main domain
export const MAIN_DOMAIN = 'karimwael.com';
export const MAIN_DOMAIN_URL = `https://${MAIN_DOMAIN}`;

// Server
export const PORT = process.env.PORT;
export const DOMAIN = `red.${MAIN_DOMAIN}`;
export const DOMAIN_URL = `https://${DOMAIN}`;
export const SERVER_URL = __dev__ ? `http://localhost:${PORT}` : DOMAIN_URL;
