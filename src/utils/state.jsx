// store/uploadStore.js
import {create} from "zustand";

const useUploadStore = create((set) => ({
  parsedData: null,
  setParsedData: (data) => set({ parsedData: data }),
  
}));

export const useUploadStore1 = create((set) => ({
  salesData: null,
  setSalesData: (data) => set({ salesData: data }),
  
}));

export default useUploadStore;
