import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (Obj, key) => {
  try {
    const jsonValue = JSON.stringify(Obj);
    console.log(Obj);
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

const allFormData = async () => {
  const sec1 = await getData("sec1");
  const sec2 = await getData("sec2");
  const sec3 = await getData("sec3");

  return {
    ...sec1,
    ...sec2,
    ...sec3,
  };
};

export default { storeData, getData, allFormData };
