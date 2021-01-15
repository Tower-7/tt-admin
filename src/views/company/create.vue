<template>
  <article-detail v-if="!loading" :is-edit="isEdit" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail'
import { fetchCompany } from '@/api/company'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail },
  data() {
    return {
      isEdit: false,
      loading: true
    }
  },
  created() {
    fetchCompany().then(res => {
      this.loading = false
      if (res.data) {
        this.isEdit = true
      }
    })
  }
}
</script>
