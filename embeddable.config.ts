import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],
  modelsSrc: './src/embeddable.com/models',
  componentsSrc: './src/embeddable.com/components',
  errorFallbackComponent: './src/embeddable.com/components/util/ErrorHandler.jsx'
});
