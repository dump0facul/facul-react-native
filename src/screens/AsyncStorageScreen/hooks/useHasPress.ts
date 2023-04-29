import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const KEY_LOCAL_STORAGE = "APP_PERSISTENCE_HAS_PRESSED";

function useHasPress() {
  const [hasPress, setHasPress] = useState(false);

  useEffect(() => {
    async function loadHasPress(): Promise<boolean> {
      const rawStorage = await AsyncStorage.getItem(KEY_LOCAL_STORAGE);
      if (!rawStorage) return false;

      return JSON.parse(rawStorage);
    }

    loadHasPress().then(setHasPress);
  }, []);

  async function saveHasPressed(state: boolean) {
    await AsyncStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(state));
  }

  function onPress() {
    setHasPress((prevHasPress) => {
      saveHasPressed(!prevHasPress);
      return !prevHasPress;
    });
  }

  return { hasPress, onPress };
}

export default useHasPress;
