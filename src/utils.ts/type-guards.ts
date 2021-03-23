import { FormField } from '../types';

/**
 * Checks if an element is a form element
 * @param element
 */
export const isFormField = (element: Element | EventTarget | null): element is FormField => {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
};
