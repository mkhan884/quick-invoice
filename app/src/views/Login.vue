<template>
  <div class="login-wrapper flex justify-center items-center min-h-screen">
    <Toaster />
    <Card class="w-1/4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login with your account to use the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="email">
          <Label for="email" class="text-xs">Email</Label>
          <Input class="text-xs" id="email" type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="password mt-2">
          <Label class="text-xs" for="password">Password</Label>
          <Input
            class="text-xs"
            id="password"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full" @click="handleLogin">Login</Button>
      </CardFooter>
      <div class="mb-4 text-center text-sm">
        Don't have an account?
        <router-link to="/register">
          <a class="underline"> Sign up </a>
        </router-link>
      </div>
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
export default {
  components: {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Toaster,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      const { toast } = useToast()
      try {
        const response = await axios.post('http://localhost:3000/users/login', {
          email: this.email,
          password: this.password,
        })
        const token = response.data.token
        localStorage.setItem('authToken', token)
        this.$router.push('/app/dashboard')
      } catch (err) {
        toast({ description: err.response.data.error })
      }
    },
  },
}
</script>

<style></style>
