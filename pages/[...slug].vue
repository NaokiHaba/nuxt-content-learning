<script setup>
const { path } = useRoute()
const router = useRouter()
const { data } = await useAsyncData(`content-${path}`, () => 
  queryContent().where({ _path: path }).findOne()
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
      <div class="mb-3">
        <Button 
          icon="pi pi-arrow-left" 
          label="記事一覧へ戻る" 
          text
          @click="router.push('/')" />
      </div>
      
      <Card>
        <template #title>
          <h1 class="text-4xl font-bold m-0">{{ data.title }}</h1>
        </template>
        <template #subtitle>
          <div class="flex align-items-center gap-3 text-500">
            <span><i class="pi pi-calendar mr-1"></i>{{ formatDate(data.date) }}</span>
          </div>
          <div class="flex gap-2 mt-3">
            <Chip v-for="topic in data.topics" 
                  :key="topic" 
                  :label="topic"
                  class="bg-primary-100 text-primary" />
          </div>
        </template>
        <template #content>
          <Divider />
          <ContentRenderer :value="data" />
        </template>
      </Card>
    </div>
  </div>
</template>