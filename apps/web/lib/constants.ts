export const APP_NAME = 'CommandCore';
export const APP_DESCRIPTION = 'A modern dashboard application';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  LOGIN: '/login',
} as const;

export const WIDGET_TYPES = {
  CALENDAR: 'calendar',
  TODO: 'todo',
  WEATHER: 'weather',
  NEWS: 'news',
  MUSIC: 'music',
  AI_CHAT: 'ai-chat',
} as const;