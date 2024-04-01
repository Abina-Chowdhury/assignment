// store/index.js
import { defineStore } from 'pinia';

import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useStore = defineStore('store', {
    state: () => ({
        blogs: [],
        lastId: 0
    }),

    actions: {
        addBlog(content) {
            this.blogs.push({ id: ++this.lastId, content });
        },

        deleteBlog(id) {
            this.blogs = this.blogs.filter(blog => blog.id !== id);
        },

        getBlog(id) {
            return this.blogs.find(blog => blog.id === id);
        }
    }
});
