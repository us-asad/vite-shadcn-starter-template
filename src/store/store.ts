import {baseApi} from '@/features'
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(baseApi.middleware),
})

export type TRootState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch
