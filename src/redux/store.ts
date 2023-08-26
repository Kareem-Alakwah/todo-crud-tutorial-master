import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import meetingReducer from "./meeting";

const persistConfig = { key: 'root', storage }

const persistedReducer = persistReducer(persistConfig, meetingReducer)

export const store = configureStore({
  reducer: {
    meetings: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

const persistor = persistStore(store)

export { persistor };
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch