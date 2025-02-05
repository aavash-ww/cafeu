<template>
  <Layout>
    <Suspense>
      <template #default>
       <Homepage />
      </template>
      <template #fallback>
        <h1>Loading....</h1>
      </template>
    </Suspense>
  </Layout>
</template>


<script>
import Layout from './Layout.vue';
import Homepage from './pages/Homepage.vue';
export default {
  components: {
    Layout,
    Homepage
  }
}
</script>