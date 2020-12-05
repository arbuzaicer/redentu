export const enableHotReload = (store: any) => {
  if ((module as any).hot) {
    (module as any).hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }
};
