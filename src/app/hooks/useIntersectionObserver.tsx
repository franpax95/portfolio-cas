'use client';

import { useEffect, useState, useRef, RefObject } from 'react';

// Definimos el tipo de opciones del IntersectionObserver
// interface IntersectionObserverHookArgs extends IntersectionObserverInit {}

// Definimos el tipo de retorno: un RefObject del elemento y el estado de visibilidad
type IntersectionObserverHookReturn<T extends HTMLElement> = [RefObject<T>, boolean];

const useIntersectionObserver = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): IntersectionObserverHookReturn<T> => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
