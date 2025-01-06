<template>
  <div class="flex h-screen flex-col justify-between border-e ">
    <div class="px-4 py-6">
      <ul class="mt-6 space-y-1">
        <li class="group">
          <router-link to="/app/dashboard">
            <a
              href="#"
              class="flex flex-row block rounded-lg px-4 py-2 text-sm text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-700 align-middle"
              :class="{ 'bg-gray-100 text-gray-700': $route.path === '/app/dashboard' }"
              >
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house"
                  :class="{
                    'text-black': $route.path === '/app/dashboard',
                    'text-gray-500 group-hover:text-black': $route.path !== '/app/dashboard'
                  }"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path
                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  />
                </svg>
              </div>
              <div class="label ml-2">Dashboard</div>
            </a>
          </router-link>
        </li>
        <li class="group">
          <router-link to="/app/invoices">
            <a
              href="#"
              class="flex flex-row block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 align-middle"
              :class="{ 'bg-gray-100 text-gray-700': $route.path === '/app/invoices' }"
            >
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-text"     
                  :class="{
                    'text-black': $route.path === '/app/invoices',
                    'text-gray-500 group-hover:text-black': $route.path !== '/app/invoices'
                  }"                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>
              <div class="label ml-2">Invoices</div>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sticky inset-x-0 bottom-0 border-t border-secondary p-2">
      <div class="flex items-center gap-2 justify-between">
        <div class="dark-mode-toggle">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline">
                <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem @click="setMode('light')">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="setMode('dark')">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="setMode('auto')">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          @click="handleLogout"
          class="group flex w-full justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-out group-hover:text-black"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

export default {
  name: "Sidebar",
  components: {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    Icon
  },
  data() {
    return {
      mode: useColorMode()
    }
  },
  setup() {
    const mode = useColorMode();
    const setMode = (value) => {
      mode.value = value;
    };
    return { setMode };
  },

  methods: {
    handleLogout() {
      localStorage.removeItem('authToken');
      this.$router.push('/login');
    }
  },

}
</script>

