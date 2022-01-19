import { WebPlugin } from '@capacitor/core';

import type { GoogleLoginPlugin } from './definitions';

export class GoogleLoginWeb extends WebPlugin implements GoogleLoginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
