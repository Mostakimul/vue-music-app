import { onAuthStateChanged } from "@firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const user = ref(auth.currentUser)

onAuthStateChanged(auth, _user => {
  console.log(`User is${_user}`);
  // console.log(_user);
  user.value = _user
  // console.log(`After ${user.value.displayName}`);
})

const getUser = () => {
  return {user}
}


export default getUser