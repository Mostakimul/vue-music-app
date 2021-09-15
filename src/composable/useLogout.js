import { signOut } from "@firebase/auth"
import { ref } from "vue"
import { auth } from "../firebase/config"

const error = ref(null)


const appLogout = async () => {
  error.value = null

  try {
    await signOut(auth)
  } catch (err) {
    error.value = err.message
  }

}

const useLogout = () => {
  return { appLogout, error }
}

export default useLogout