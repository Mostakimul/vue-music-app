import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from 'vue';
import { auth } from '../firebase/config';

const error = ref(null);
const loading = ref(false)

const appSignup = async (yourEmail, yourPassword, displayName) => {
  error.value = null;
  loading.value = true;

  try {
    // create user
    const res = await createUserWithEmailAndPassword(
      auth,
      yourEmail,
      yourPassword
    );

    if (!res) {
      throw new Error('Can not complete sign up!');
    }
    // console.log(res);
    // update name
    await updateProfile(auth.currentUser, {displayName});
    // make error to null
    error.value = null;
    // console.log(res.user);
    loading.value = false
    return res;
  } catch (err) {
    loading.value = false;
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, appSignup };
};

export default useSignup;
