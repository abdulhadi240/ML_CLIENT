// store/uploadStore.js
import {create} from "zustand";

const useUploadStore = create((set) => ({
  parsedData: null,
  setParsedData: (data) => set({ parsedData: data }),
}));

export default useUploadStore;
