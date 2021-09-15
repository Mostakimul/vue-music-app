<template>
  <div class="bg-gray-50 py-3 px-2 my-10 rounded-lg shadow-xl">
    <nav class="flex items-center justify-between">
      <img src="@/assets/music.png" alt="music logo" />
      <h1 class="text-2xl font-medium">
        <router-link :to="{ name: 'Home' }">Vue Music App</router-link>
      </h1>
      <div>
        <div v-if="user">
          <button
            @click="handleClick"
            class="
              mx-2
              bg-gray-500
              hover:bg-gray-200
              py-1
              px-3
              rounded-lg
              text-gray-100
              hover:text-gray-500
              shadow-md
              transition-all
              duration-200
            "
          >
            Logout
          </button>
        </div>
        <div v-else>
          <router-link
            :to="{ name: 'Signup' }"
            class="
              mx-2
              bg-gray-500
              hover:bg-gray-200
              py-1
              px-3
              rounded-lg
              text-gray-100
              hover:text-gray-500
              shadow-md
              transition-all
              duration-200
            "
            >Signup</router-link
          >
          <router-link
            :to="{ name: 'Login' }"
            class="
              mx-2
              bg-gray-500
              hover:bg-gray-200
              py-1
              px-3
              rounded-lg
              text-gray-100
              hover:text-gray-500
              shadow-md
              transition-all
              duration-200
            "
            >Login</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import getUser from '../composable/getUser';
import useLogout from '../composable/useLogout';

export default {
  setup() {
    const { appLogout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    // Logout Handle
    const handleClick = async () => {
      await appLogout();
      console.log('User logged out!!!');
      router.push({ name: 'Login' });
    };

    return { handleClick, user };
  },
};
</script>

<style lang="scss" scoped></style>
