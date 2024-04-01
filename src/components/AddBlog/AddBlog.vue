<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store';

const router = useRouter();
const store = useStore();

const content = ref('');

const addBlog = () => {
  store.addBlog(content.value);
  router.push('/');
};
</script>

<template>
    <div>
      <h1>Add Blog</h1>
      <form @submit.prevent="addBlog">
        <textarea v-model="content" placeholder="Enter your blog content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>