import { signInWithEmailAndPassword } from '@firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

const error = ref(null);
const loading = ref(false)

const appLogin = async (yourEmail, yourPassword) => {
  error.value = null;
  loading.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, yourEmail, yourPassword)
    error.value = null
    // console.log(res);
    loading.value = false
    return res
  } catch (err) {
    // console.log(err.message);
    error.value = err.message;
    loading.value = false
  }
};

const useLogin = () => {
  return { error, appLogin, loading };
};

export default useLogin;
