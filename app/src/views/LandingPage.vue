<template>
  <div class="min-h-screen bg-background">
    <header class="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" class="flex items-center justify-center">
        <span class="font-bold">QuickInvoice</span>
      </Link>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <router-link to="/register" class="text-sm font-medium hover:underline underline-offset-4">
          Register
        </router-link>
        <router-link to="/login" class="text-sm font-medium hover:underline underline-offset-4">
          Sign In
        </router-link>
      </nav>
    </header>
    <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4 text-center">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Professional Invoicing Made Simple
              </h1>
              <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Create, manage, and track invoices effortlessly. Perfect for freelancers and small businesses.
              </p>
            </div>
            <div class="space-x-4">
              <router-link to="/register">
                <Button size="lg">Get Started</Button>
              </router-link>
              <router-link to="/login">
                <Button variant="outline" size="lg">Sign In</Button>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
      <p class="text-xs text-gray-500 dark:text-gray-400">© 2024 QuickInvoice. All rights reserved.</p>
      <nav class="flex gap-4 sm:gap-6">
        <Link class="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link class="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
</template>

<script>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default {
  name: 'LandingPage',
  components: {
    Button,
    Badge
  }
}
</script>
<style>

</style>
