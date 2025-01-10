/**
 * Core functionality for the Easylink platform
 * @packageDocumentation
 */
export const VERSION = '0.0.1';
/**
 * Configuration options for the Easylink platform
 */
export interface EasylinkConfig {
  /** API endpoint URL */
  apiUrl: string;
  /** Authentication token */
  authToken?: string;
}
/**
 * Initialize the Easylink platform with the given configuration
 * @param config - Configuration options
 * @returns Initialized configuration
 */
export function initializeEasylink(config: EasylinkConfig): EasylinkConfig {
  return {
    ...config,
    apiUrl: config.apiUrl.replace(/\/+$/, ''), // Remove trailing slashes
  };
}
