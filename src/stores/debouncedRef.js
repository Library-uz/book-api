import {customRef, watch} from "vue";

/**
 * Debounced ref — qiymat faqat `delay` ms tinch turgandan keyin yangilanadi.
 */

export function useDebouncedRef(value, delay = 500) {
    let timeout;

    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    value = newValue;
                    trigger();
                },  delay)
            }
        }
    })
}

/**
 * watchDebounced — source o'zgarganda callback'ni debounce qilib chaqiradi.
 * source darhol o'zgaradi, faqat callback kechiktiriladi.
 */
export function watchDebounced(source, callback, { delay = 500, maxWait } = {}) {
    let timeout;
    let maxTimeout;

    return watch(source, (newVal, oldVal) => {
        clearTimeout(timeout);

        if (maxWait && !maxTimeout) {
            maxTimeout = setTimeout(() => {
                maxTimeout = null;
                clearTimeout(timeout);
                callback(newVal, oldVal);
            }, maxWait);
        }

        timeout = setTimeout(() => {
            if (maxTimeout) {
                clearTimeout(maxTimeout);
                maxTimeout = null;
            }
            callback(newVal, oldVal);
        }, delay);
    });
}
