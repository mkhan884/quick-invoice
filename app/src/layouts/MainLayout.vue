<template>
  <div class="layout flex">
    <div class="sidebar w-44">
        <Sidebar />
    </div>
    <div class="content flex-1">
        <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/ui/Sidebar.vue'

export default {
    components:{
        Sidebar
    }
}
</script>