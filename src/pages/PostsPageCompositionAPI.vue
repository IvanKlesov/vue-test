<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Поиск по названию"
    >

    </my-input>
    <div class="app__btns">
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      >
      </my-select>
    </div>


    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Идет Загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import MySelect from "@/components/UI/MySelect.vue";
import { usePosts } from '@/hooks/usePosts';
import  useSortedPosts  from '@/hooks/useSortedPosts';
import  useSortedAndSearchedPosts  from '@/hooks/useSortedAndSearchedPosts';

export default {
  components: {
    PostList,
    MySelect
},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  setup() {
    const {posts, isPostLoading, totalPages} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {sortedAndSearchedPosts, searchQuery} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      isPostLoading,
      totalPages,
      sortedPosts,
      selectedSort,
      sortedAndSearchedPosts,
      searchQuery
    }
  }
 
}
</script>

<style>

.app__btns {
  display: flex;
  justify-content: space-between;

  margin: 15px 0;
}

.page-wrapper {
  display: flex;

  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 5px 7px;
}

.current-page {
  border: 2px solid teal;
}

</style>