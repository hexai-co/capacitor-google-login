export interface GoogleLoginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
