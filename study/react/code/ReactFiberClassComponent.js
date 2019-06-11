const classComponentUpdater = {
    isMounted,
    enqueueSetState(inst, payload, callback) {
        const fiber = getInstance(inst);
        const currentTime = requestCurrentTime();
        const suspenseConfig = requestCurrentSuspenseConfig();
        const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig,
        );

        const update = createUpdate(expirationTime, suspenseConfig);
        update.payload = payload;
        if (callback !== undefined && callback !== null) {
            if (__DEV__) {
                warnOnInvalidCallback(callback, 'setState');
            }
            update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
            flushPassiveEffects();
        }
        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
    },
    enqueueReplaceState(inst, payload, callback) {
        const fiber = getInstance(inst);
        const currentTime = requestCurrentTime();
        const suspenseConfig = requestCurrentSuspenseConfig();
        const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig,
        );

        const update = createUpdate(expirationTime, suspenseConfig);
        update.tag = ReplaceState;
        update.payload = payload;

        if (callback !== undefined && callback !== null) {
            if (__DEV__) {
                warnOnInvalidCallback(callback, 'replaceState');
            }
            update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
            flushPassiveEffects();
        }
        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
    },
    enqueueForceUpdate(inst, callback) {
        const fiber = getInstance(inst);
        const currentTime = requestCurrentTime();
        const suspenseConfig = requestCurrentSuspenseConfig();
        const expirationTime = computeExpirationForFiber(
            currentTime,
            fiber,
            suspenseConfig,
        );

        const update = createUpdate(expirationTime, suspenseConfig);
        update.tag = ForceUpdate;

        if (callback !== undefined && callback !== null) {
            if (__DEV__) {
                warnOnInvalidCallback(callback, 'forceUpdate');
            }
            update.callback = callback;
        }

        if (revertPassiveEffectsChange) {
            flushPassiveEffects();
        }
        enqueueUpdate(fiber, update);
        scheduleWork(fiber, expirationTime);
    },
};


function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    const { result, keyPrefix, func, context } = bookKeeping;

    let mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, c => c);
    } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix +
                (mappedChild.key && (!child || child.key !== mappedChild.key)
                    ? escapeUserProvidedKey(mappedChild.key) + '/'
                    : '') +
                childKey,
            );
        }
        result.push(mappedChild);
    }
}