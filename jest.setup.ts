import '@testing-library/jest-dom';

jest.mock('@/config/env', () => ({
  env: {
    supabaseUrl: 'https://test.supabase.co',
    supabaseAnonKey: 'test-anon-key'
  }
}));

// Object.defineProperty(globalThis, 'import', {
//   value: {
//     meta: {
//       env: {
//         VITE_SUPABASE_ANON_KEY: 'test-anon-key',
//         VITE_SUPABASE_URL: 'https://test.supabase.co'
//       }
//     }
//   }
// });

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
