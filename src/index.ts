import { registerPlugin } from '@capacitor/core';

import type { GoogleLoginPlugin } from './definitions';

const GoogleLogin = registerPlugin<GoogleLoginPlugin>('GoogleLogin', {
  web: () => import('./web').then(m => new m.GoogleLoginWeb()),
});

export * from './definitions';
export { GoogleLogin };
