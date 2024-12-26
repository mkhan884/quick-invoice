<template>
  <div class="dashboard-wrapper min-h-screen">
    <div class="overview text-2xl font-bold pl-5 pt-5 pb-2">Overview</div>
    <div class="yearly-monthly pl-5 pr-5 pb-5">
      <Tabs default-value="Yearly">
        <TabsList>
          <TabsTrigger value="Yearly"> Yearly </TabsTrigger>
          <TabsTrigger value="Monthly"> Monthly </TabsTrigger>
        </TabsList>
        <TabsContent value="Yearly">
          <div class="dates mb-4">
            <Badge class="text-xs" variant="secondary">Jan 1, 2024 to Dec 31, 2024</Badge>
          </div>
          <div class="flex flex-wrap flex-row gap-4">
            <Card class="flex-1 min-w-[200px]">
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row space-x-2">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-dollar-sign"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <div class="text-2xl font-bold">$45,231.89</div>
              </CardContent>
            </Card>
            <Card class="flex-1 min-w-[200px]">
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium"> Invoices Issued </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row space-x-2">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-clipboard-plus"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path
                      d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    />
                    <path d="M9 14h6" />
                    <path d="M12 17v-6" />
                  </svg>
                </div>
                <div class="text-2xl font-bold">+12</div>
              </CardContent>
            </Card>
            <Card class="flex-1 min-w-[200px]">
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium"> Invoices Paid </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row space-x-2">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-check"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <div class="text-2xl font-bold">10</div>
              </CardContent>
            </Card>
            <Card class="flex-1 min-w-[200px]">
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium"> Invoices Pending </CardTitle>
              </CardHeader>
              <CardContent class="flex flex-row space-x-2">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-file-x"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="m14.5 12.5-5 5" />
                    <path d="m9.5 12.5 5 5" />
                  </svg>
                </div>
                <div class="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
export default {
  name: 'Dashboard',
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Badge,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
