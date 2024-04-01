<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '../store'; 

const router = useRouter();
const store = useStore();

const blogs = ref(store.state.blogs);

const deleteBlog = (id) => {
  store.deleteBlog(id);
};

store.onMounted(() => {
  blogs.value = store.state.blogs;
});

</script>
<template>
    <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id }}">
          {{ blog.content.slice(0, 150) }}{{ blog.content.length > 150 ? '...' : '' }}
        </router-link>
        <button @click="deleteBlog(blog.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>