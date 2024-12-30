<template>
  <div class="login-wrapper flex justify-center items-center min-h-screen">
    <Toaster />
    <Card class="w-1/4">
      <CardHeader>
        <CardTitle>Register for an account</CardTitle>
        <CardDescription>Create a new account to use the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="email">
          <Label for="email" class="text-xs">Email</Label>
          <Input id="email" type="email" placeholder="Email" v-model="email" class="text-xs" />
        </div>
        <div class="password mt-2">
          <Label for="password" class="text-xs">Password</Label>
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
        <Button class="w-full" @click="handleRegister">Register</Button>
      </CardFooter>
      <div class="mb-4 text-center text-sm">
        Already have an account?
        <router-link to="/">
          <a class="underline"> Login </a>
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
    async handleRegister() {
      const { toast } = useToast()
      try {
        const response = await axios.post('http://localhost:3000/users/register', {
          email: this.email,
          password: this.password,
        })
        toast({
          description: response.data.message,
        })
      } catch (err) {
        toast({
          description: err.response.data.error,
        })
      }
    },
  },
}
</script>

<style></style>
