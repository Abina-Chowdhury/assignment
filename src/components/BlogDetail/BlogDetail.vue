<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store';

const router = useRouter();
const store = useStore();

const blog = ref(null);

const deleteBlog = (id) => {
  store.deleteBlog(id);
  router.push('/');
};

store.onMounted(() => {
  const id = router.currentRoute.value.params.id;
  blog.value = store.getBlog(id);
});
</script>

<template>
    <div>
      <h1>Blog Detail</h1>
      <p>{{ blog.content }}</p>
      <button @click="deleteBlog(blog.id)">Delete</button>
    </div>
  </template>
  
