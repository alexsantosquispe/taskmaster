type LSValuesTypes = string | number | boolean;

export const getLSValue = (key: string) => localStorage.getItem(key);

export const setLSValue = (key: string, value: LSValuesTypes) => {
  localStorage.setItem(key, String(value));
};
