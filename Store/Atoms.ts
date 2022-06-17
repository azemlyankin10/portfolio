import { atom } from 'recoil'

export const isCardOpen = atom({
  key: 'isCardOpen', 
  default: false, 
})

export const isLoading = atom({
  key: 'isLoading',
  default: true
})