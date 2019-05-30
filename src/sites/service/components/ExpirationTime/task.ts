export type ExpirationTime = number;

let MAX_SIGNED_31_BIT_INT = 1073741823;
const Sync = MAX_SIGNED_31_BIT_INT;
const Batched = Sync - 1;

const UNIT_SIZE = 10;
const MAGIC_NUMBER_OFFSET = Batched - 1;

function msToExpirationTime(ms: number): ExpirationTime {
    // Always add an offset so that we don't clash with the magic number for NoWork.
    // MAX_SIGNED_31_BIT_INT - 2 - ()
    return MAGIC_NUMBER_OFFSET - ((ms / UNIT_SIZE) | 0);
}

function expirationTimeToMs(expirationTime: ExpirationTime): number {
    return (MAGIC_NUMBER_OFFSET - expirationTime) * UNIT_SIZE;
}

function ceiling(num: number, precision: number): number {
    return (((num / precision) | 0) + 1) * precision;
}

function computeExpirationBucket(
    currentTime: ExpirationTime,
    expirationInMs: number,
    bucketSizeMs: number,
): ExpirationTime {
    return (
        MAGIC_NUMBER_OFFSET -
        ceiling(
            MAGIC_NUMBER_OFFSET - currentTime + expirationInMs / UNIT_SIZE,
            bucketSizeMs / UNIT_SIZE,
        )
    );
}

const LOW_PRIORITY_EXPIRATION = 5000;
const LOW_PRIORITY_BATCH_SIZE = 250;

export function computeAsyncExpiration(
    currentTime: ExpirationTime,
): ExpirationTime {
    return computeExpirationBucket(
        currentTime,
        LOW_PRIORITY_EXPIRATION,
        LOW_PRIORITY_BATCH_SIZE,
    );
}