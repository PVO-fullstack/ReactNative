import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { uploadPhotoToServer } from "./uploadPhotoToFirestore";

export const writeDataToFirestore = async (
  uri,
  state,
  location,
  displayName,
  uid
) => {
  const photo = await uploadPhotoToServer(uri);
  const currentTime = new Date();
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      photo,
      state,
      location,
      displayName,
      uid,
      currentTime,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
