/**
 * Checks if an element is visible
 * @param {HTMLElement} element
 */
export const isVisible = (element: HTMLElement): boolean =>
  !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);

/**
 * Find the first text node child of an element
 * @param element
 */
export const findTextNode = (element: Node): ChildNode | undefined => {
  let textNode: ChildNode | undefined;

  for (const node of element.childNodes) {
    if (node.childNodes.length) textNode = findTextNode(node);
    if (node.nodeType == Node.TEXT_NODE) textNode = node;
    if (textNode) break;
  }
  return textNode;
};

/**
 * Clone a node that has the same type as the original one
 * @param node
 */
export const cloneNode = <T extends Node>(node: T): T => <T>node.cloneNode(true);
