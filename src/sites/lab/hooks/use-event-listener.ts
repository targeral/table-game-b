import { useRef, useEffect,  MutableRefObject} from 'react';

const initHandlerRef = () => {};

export type ElementWithListenerAttr = {
    addEventListener(event: string, listener: EventListener | EventListenerObject): void;
    removeEventListener(event: string, listener: EventListener | EventListenerObject): void;
}
export type handleFn = (event: Event) => void;
export type HandlerRef = handleFn;
export type GlobalType = any;

const useEventListener = (
    eventName: string, 
    handler: handleFn, 
    element: ElementWithListenerAttr = (global as GlobalType)
) => {
    const savedHandler: MutableRefObject<HandlerRef> = useRef<HandlerRef>(initHandlerRef);

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = (event: Event) => savedHandler.current(event);

            // Add event listener
            element.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
};

export default useEventListener;