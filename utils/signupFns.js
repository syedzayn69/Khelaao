import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (Obj, key) => {
  try {
    const jsonValue = JSON.stringify(Obj);
    await AsyncStorage.setItem(`${key}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default { storeData, getData };
