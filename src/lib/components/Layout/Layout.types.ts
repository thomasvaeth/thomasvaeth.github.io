import type { Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export type LayoutProps = {
  variant?: '1•1•1' | '2•1' | '1•2' | '1•1' | '1';
  columnStart?: 'auto' | '1' | '2' | '3';
  children: Snippet;
  class?: ClassValue;
};
