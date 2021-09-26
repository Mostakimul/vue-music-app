<template>
  <div class="bg-gray-50 p-8 rounded-lg shadow-lg">
    <h4 class="text-center text-xl font-medium mb-3">Create New Playlist</h4>
    <form @submit.prevent="handleSubmit" class="bg-gray-200 p-2 rounded-lg">
      <input
        v-model="title"
        type="text"
        class="block w-full p-2 my-2 rounded-lg"
        placeholder="Playlist title"
        required
      />
      <textarea
        v-model="description"
        class="block w-full p-2 my-2 rounded-lg"
        placeholder="Playlist Description..."
        required
      ></textarea>
      <label
        class="inline-block my-5 bg-gray-300 text-gray-700 border-2 border-dashed border-gray-700 p-2 rounded-lg"
      >
        Click here to upload playlist cover
        <input type="file" class="sr-only" />
      </label>
      <!-- errors -->
      <div class="text-red-500"></div>
      <!-- Save button -->
      <button
        class="block mx-auto bg-red-500 hover:bg-gray-200 py-2 px-5 rounded-lg text-gray-100 hover:text-red-500 shadow-md transition-all duration-200"
      >Create</button>
    </form>
  </div>
</template>

<script>import { ref } from "vue";

export default {
  setup() {
    const title = ref('')
    const description = ref('')

    const handleSubmit = () => {
      console.log(title.value, description.value);
    }

    return { title, description, handleSubmit }
  }
};
</script>

<style>
</style>
