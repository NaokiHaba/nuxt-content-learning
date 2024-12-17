<script setup>
const { data: articles } = await useAsyncData('articles', () => 
  queryContent('articles')
    .sort({ date: -1 })
    .find()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 

<template>
  <div class="grid">
    <div class="col-12 lg:col-8 lg:col-offset-2">
      <h1 class="text-4xl font-bold mb-4">最新の記事</h1>
      
      <div v-if="pending" class="flex justify-content-center">
        <ProgressSpinner />
      </div>
      
      <div v-else-if="articles" class="grid">
        <div v-for="article in articles" :key="article._path" class="col-12 mb-4">
          <Card>
            <template #title>
              <NuxtLink :to="article._path" class="text-2xl font-bold no-underline text-900 hover:text-primary">
                {{ article.title }}
              </NuxtLink>
            </template>
            <template #content>
              <div class="flex align-items-center gap-3 text-500">
                <span><i class="pi pi-calendar mr-1"></i>{{ formatDate(article.date) }}</span>
              </div>
              <p class="text-700 line-height-3 mt-3">{{ article.description }}</p>
              <div class="flex gap-2 mt-3">
                <Chip v-for="topic in article.topics" 
                      :key="topic" 
                      :label="topic"
                      class="bg-primary-100 text-primary" />
              </div>
            </template>
          </Card>
        </div>
      </div>

      <Paginator 
        v-if="articles && articles.length > 10"
        :rows="10" 
        :totalRecords="articles.length"
        class="mt-4" />
    </div>
  </div>
</template>