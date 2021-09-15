<template>
  <div class="bg-gray-50 mt-5 rounded-md p-5 w-3/4 mx-auto shadow-xl">
    <h3 class="my-2 text-xl font-medium">Login Form</h3>
    <form @submit.prevent="handleSubmit" class="bg-gray-200 p-2 rounded-lg">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="block w-full p-2 my-2 rounded-lg"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="block w-full p-2 my-2 rounded-lg"
      />
      <p v-if="error" class="text-red-700">{{ error }}</p>
      <button
        v-if="!loading"
        class="p-2 mt-1 bg-gray-700 font-medium text-gray-200 rounded-lg"
      >
        Login
      </button>
      <button
        v-if="loading"
        class="p-2 mt-1 bg-gray-300 font-medium text-gray-700 rounded-lg"
        disabled
      >
        Loading
      </button>
    </form>
  </div>
</template>

<script>
import useLogin from '../../composable/useLogin';
import { ref } from 'vue';
export default {
  setup() {
    const { error, appLogin, loading } = useLogin();

    const email = ref('');
    const password = ref('');

    // login handle
    const handleSubmit = async () => {
      const res = await appLogin(email.value, password.value);
      if (!error.value) {
        console.log('User Logged In');
      }
    };

    return { email, password, handleSubmit, error, loading };
  },
};
</script>

<style lang="scss" scoped></style>
