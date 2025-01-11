/* eslint-disable @typescript-eslint/no-explicit-any */
declare const process: any;

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  environment: process.env.NODE_ENV || 'development',
});
