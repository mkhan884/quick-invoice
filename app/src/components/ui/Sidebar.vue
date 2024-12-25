<template>
  <div class="flex h-screen flex-col justify-between border-e bg-white w-1/6">
    <div class="px-4 py-6">
      <ul class="mt-6 space-y-1">
        <li class="group">
          <a
            href="#"
            class="flex flex-row block rounded-lg px-4 py-2 text-sm text-gray-500 font-medium hover:bg-gray-100 hover:text-gray-700 align-middle"
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
                class="lucide lucide-house text-gray-500 group-hover:text-black"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                />
              </svg>
            </div>
            <div class="label ml-2">Dashboard</div>
          </a>
        </li>
        <li class="group">
          <a
            href="#"
            class="flex flex-row block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 align-middle"
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
                class="lucide lucide-file-text text-gray-500 group-hover:text-black"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </div>
            <div class="label ml-2">Invoices</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style></style>
