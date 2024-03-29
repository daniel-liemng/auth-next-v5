// Routes that are accessible to the public
// These routes do not require authentication
export const publicRoutes = ['/', '/auth/new-verification'];

// Routes that used for authentication
// These routes will redirect logged in users to /settings
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

// The prefix for API authentication routes
// Routes that starts with the prefix are used for API authentication purposes
export const apiAuthPrefix = '/api/auth';

// Default redirect path after logging in
export const DEFAULT_LOGIN_REDIRECT = '/settings';
