import { validPseudoSelectors } from './constants';

export interface ElementData {
  element: Element;
  fromTarget: Element;
  styleProperty: string;
  displayPropertyName: string | 'css' | 'css-block' | null;
  pseudoTarget?: typeof validPseudoSelectors[number];
}

export interface ElementsDataByViewportWidth {
  [key: string]: ElementData[];
}
