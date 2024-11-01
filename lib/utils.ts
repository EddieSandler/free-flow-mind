// lib/utils.ts

/**
 * Utility function for conditionally joining class names
 * Use: `cn("class1", condition && "class2")`
 */

/**
 * Utility function to debounce function calls
 * Use to limit how often a function is executed
 */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
export function debounce<F extends (...args: any[]) => void>(func: F, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<F>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Utility function to format dates (example for US locale)
 */
export function formatDate(date: Date, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}
