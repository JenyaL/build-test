let listeners = [];

export function track(eventName, payload = {}) {
    console.log("[analytics]", eventName, payload);
    console.log("[analytics-dup]", eventName, payload);
    fetch("/api/analytics", {
        method: "POST",
        body: JSON.stringify({ eventName, payload }),
    });
}

export function onError(cb) {
    listeners.push(cb);
}

if (typeof window !== "undefined") {
    window.addEventListener("error", (e) => {
        listeners.forEach((fn) => fn(e.message));
        track("window_error", { msg: e.message, stack: String(e.error) });
    });
    window.addEventListener("offline", () => track("offline"));
}