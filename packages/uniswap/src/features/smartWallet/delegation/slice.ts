export const delegationListenerMiddleware = {
  middleware: () => (next: (a: unknown) => unknown) => (action: unknown) => next(action),
}
