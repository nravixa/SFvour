/* eslint-disable @typescript-eslint/no-explicit-any */
import "motion";

declare module "motion" {
  export function animateLayout(
    updateDom: () => void | Promise<void>,
    options?: {
      duration?: number;
      ease?: number[] | string;
      delay?: number;
    }
  ): Promise<void> & { then: (onfulfilled?: () => void) => Promise<void> };

  export function animateLayout(
    scope: HTMLElement | Element | Document,
    updateDom: () => void | Promise<void>,
    options?: {
      duration?: number;
      ease?: number[] | string;
      delay?: number;
    }
  ): Promise<void> & { then: (onfulfilled?: () => void) => Promise<void> };

  export function press(
    targetOrSelector: Element | Element[] | NodeListOf<Element> | string,
    onPressStart: (element: Element, startEvent?: any) => void | (() => void),
    options?: any
  ): () => void;

  export function resize(
    onResize: (size: { width: number; height: number }) => void
  ): () => void;

  export function resize(
    targetOrSelector: Element | Element[] | NodeListOf<Element> | string,
    onResize: (element: Element, size: { width: number; height: number }) => void
  ): () => void;

  export function motionValue<T = any>(initial: T): any;

  export function attrEffect(
    targetOrSelector: Element | Element[] | NodeListOf<Element> | string,
    attributes: Record<string, any>
  ): () => void;

  export function propEffect<T extends object = any>(
    target: T,
    properties: Record<string, any>
  ): () => void;

  export function styleEffect(
    targetOrSelector: Element | Element[] | NodeListOf<Element> | string,
    styles: Record<string, any>
  ): () => void;

  export function svgEffect(
    targetOrSelector: SVGElement | SVGElement[] | NodeListOf<SVGElement> | Element | Element[] | NodeListOf<Element> | string,
    values: Record<string, any>
  ): () => void;
}
