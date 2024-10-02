// store/index.ts (or store.ts)
import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createUserSlice } from './user.slice.js';
import { createCartSlice } from './cart-slice';
import { createJokeSlice } from './random-slice.js';

export const useStore = create()(
        persist(
            subscribeWithSelector(
                immer((set, get) => ({
                    ...createUserSlice(set),
                    ...createCartSlice(set, get),
                    ...createJokeSlice(set,get),
                }))
            ),
            {
                name: 'local-storage', // The name of the storage item
            }
        )
);
