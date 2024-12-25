<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Sidebar from './components/ui/Sidebar.vue'
import InvoiceTable from './components/ui/InvoiceTable.vue'
import Dashboard from './components/ui/Dashboard.vue'
export default {
  components: {
    Register,
    Login,
    Sidebar,
    InvoiceTable,
    Dashboard,
  },
}
</script>
