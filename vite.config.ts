import { defineConfig } from 'vite';
import { fresh } from '@fresh/plugin-vite';

export default defineConfig({
  plugins: [fresh({
    islandSpecifiers: ['jsr:@jsrob/fresh-clerk/islands'],
  })],
});
