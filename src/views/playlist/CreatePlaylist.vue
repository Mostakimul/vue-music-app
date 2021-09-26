<template>
  <div class="bg-gray-50 p-8 rounded-lg shadow-lg">
    <h4 class="text-center text-xl font-medium mb-3">Create New Playlist</h4>
    <form @submit.prevent="handleSubmit" class="bg-gray-200 p-2 rounded-lg shadow-lg">
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
        rows="5"
        placeholder="Playlist Description..."
        required
      ></textarea>
      <!-- custom Label design -->
        <input @change="showFileName" type="file" class="hidden" id="fileUpload" />
      <label
      for="fileUpload"
        class="inline-block my-5 bg-gray-300 text-gray-700 border-2 border-dashed border-gray-700 p-2 rounded-lg cursor-pointer"
      >
        Upload playlist cover
      </label>
      <span class="mx-2 text-yellow-600">{{ fileName ? fileName : "No file choosen..." }}</span>
      <!-- errors -->
      <div class="text-red-500"></div>
      <!-- Save button -->
      <button
        class="block mx-auto mt-4 mb-4 bg-red-500 hover:bg-gray-200 py-2 px-5 rounded-lg text-gray-100 hover:text-red-500 shadow-md transition-all duration-200"
      >Create</button>
    </form>
  </div>
</template>

<script>import { ref } from "vue";

export default {
  setup() {
    const title = ref('')
    const description = ref('')
    const fileName = ref('')

    const handleSubmit = () => {
      console.log(title.value, description.value);
    }

    const showFileName =(e) => {
      fileName.value = e.target.files[0].name
    }

    return { title, description, handleSubmit, showFileName, fileName }
  }
};
</script>

<style>
</style>
