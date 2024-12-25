<template>
  <div class="login-wrapper flex justify-center items-center min-h-screen">
    <Card class="w-1/4">
      <CardHeader>
        <CardTitle>Register for an account</CardTitle>
        <CardDescription>Create a new account to use the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="email">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div class="password mt-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Register</Button>
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
  },
  data() {
    return {}
  },
}
</script>

<style></style>
