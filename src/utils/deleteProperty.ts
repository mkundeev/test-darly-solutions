import { IContact } from "../types/data.types";

export default function deleteProperty(obj: Partial<IContact>) {
  const object = { ...obj };
  let key: keyof Partial<IContact>;
  for (key in object) {
    if (!object[key]) {
      delete object[key];
    }
  }
  return object;
}
