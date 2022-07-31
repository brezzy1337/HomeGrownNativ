import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../path/to/router.ts';

export const trpc = createReactQueryHooks<AppRouter>();