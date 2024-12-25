<template>
  <div class="card-wrapper w-3/5">
    <Card class="">
      <CardHeader class="flex flex-row justify-between">
        <div>
          <CardTitle> Invoices </CardTitle>
          <CardDescription> Manage all your invoices here </CardDescription>
        </div>
        <div class="new-invoice">
          <Dialog>
            <DialogTrigger as-child>
              <Button size="sm">New Invoice</Button>
            </DialogTrigger>
            <DialogScrollContent class="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>New Invoice</DialogTitle>
                <DialogDescription>
                  Create a new invoice here. Click create when you're done.
                </DialogDescription>
              </DialogHeader>
              <div class="invoice-date flex flex-row mt-2 space-x-4">
                <div class="invoice-number flex flex-col w-full">
                  <Label for="invoice-number" class="mb-2 text-xs">Invoice Number</Label>
                  <Input
                    class="text-xs"
                    id="invoice-number"
                    type="text"
                    placeholder="Invoice Number"
                  />
                </div>
                <div class="invoice-date flex flex-col w-full">
                  <Label for="invoice-date" class="mb-2 text-xs">Date</Label>
                  <Input class="text-xs" id="invoice-date" type="date" />
                </div>
                <div class="invoice-currency flex flex-col w-full">
                  <Label for="invoice-currency" class="mb-2 text-xs">Currency</Label>
                  <Input class="text-xs" id="invoice-currency" type="text" />
                </div>
              </div>
              <div class="bill-to mt-1">
                <div>
                  <Label for="bill-to" class="mb-2">Bill To</Label>
                </div>
                <div class="two-cols flex flex-row space-x-4">
                  <div class="left-col w-full">
                    <div>
                      <Label for="company-name" class="text-xs">Name</Label>
                      <Input class="text-xs" id="company-name" type="text" placeholder="Name" />
                    </div>
                    <div class="mt-2">
                      <Label for="company-address" class="text-xs">Address</Label>
                      <Input
                        class="text-xs"
                        id="company-address"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                    <div class="mt-2">
                      <Label for="company-number" class="text-xs">Business Number</Label>
                      <Input class="text-xs" id="company-number" type="text" placeholder="Number" />
                    </div>
                  </div>
                  <div class="right-col w-full">
                    <div class="city">
                      <Label for="city" class="text-xs">City</Label>
                      <Input class="text-xs" id="city" type="text" placeholder="City" />
                    </div>
                    <div class="country mt-2">
                      <Label for="country" class="text-xs">Country</Label>
                      <Input class="text-xs" id="country" type="text" placeholder="Country" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="bill-from mt-1 mb-1">
                <div>
                  <Label for="bill-from" class="mb-2">Bill From</Label>
                </div>
                <div class="two-cols flex flex-row space-x-4">
                  <div class="left-col w-full">
                    <div>
                      <Label for="name" class="text-xs">Name</Label>
                      <Input class="text-xs" id="name" type="text" placeholder="Name" />
                    </div>
                    <div class="mt-2">
                      <Label for="address" class="text-xs">Address</Label>
                      <Input class="text-xs" id="address" type="text" placeholder="Address" />
                    </div>
                    <div class="mt-2">
                      <Label for="number" class="text-xs">Phone Number</Label>
                      <Input class="text-xs" id="number" type="text" placeholder="Number" />
                    </div>
                  </div>
                  <div class="right-col w-full">
                    <div class="city">
                      <Label for="city" class="text-xs">City</Label>
                      <Input class="text-xs" id="city" type="text" placeholder="City" />
                    </div>
                    <div class="country mt-2">
                      <Label for="country" class="text-xs">Country</Label>
                      <Input class="text-xs" id="country" type="text" placeholder="Country" />
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div class="items">
                <div class="items-header flex justify-between">
                  <div class="items-label">
                    <Label for="items-label">Items</Label>
                  </div>
                  <div class="items-btn align-top">
                    <Button class="" variant="link" size="sm">Add Item</Button>
                  </div>
                </div>
                <div class="description">
                  <Label for="description-label" class="text-xs">Description</Label>
                  <Input
                    class="text-xs"
                    id="description-input"
                    type="text"
                    placeholder="Description"
                  />
                </div>
                <div class="rate-quantity-total flex space-x-4 mt-1">
                  <div class="rate w-full">
                    <Label for="rate-label" class="text-xs">Rate</Label>
                    <Input class="text-xs" id="rate-input" type="number" placeholder="Rate" />
                  </div>
                  <div class="quantity w-full">
                    <Label for="quantity-label" class="text-xs">Quantity</Label>
                    <Input
                      class="text-xs"
                      id="quantity-input"
                      type="number"
                      placeholder="Quantity"
                    />
                  </div>
                  <div class="total w-full">
                    <Label for="total-label" class="text-xs">Total</Label>
                    <Input
                      class="text-xs"
                      id="total-input"
                      type="text"
                      disabled
                      placeholder="Total"
                    />
                  </div>
                </div>
              </div>
              <div class="notes !m-0">
                <Label for="notes-label" class="text-xs">Notes</Label>
                <Textarea placeholder="Type your notes here." />
              </div>
              <div class="balance !m-0">
                <div class="balance-label">
                  <Label for="balance-label" class="text-xs">Balance Due</Label>
                </div>
                <div class="balance-amount">
                  <Badge class="text-sm font-bold" variant="secondary"> AED 4321.10 </Badge>
                </div>
              </div>
              <DialogFooter>
                <DialogClose as-child>
                  <Button size="sm" type="submit"> Create </Button>
                </DialogClose>
              </DialogFooter>
            </DialogScrollContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead class="text-center">Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="invoice in invoices" :key="invoice.invoice">
              <TableCell>
                {{ invoice.invoice }}
              </TableCell>
              <TableCell>
                {{ invoice.customer }}
              </TableCell>
              <TableCell>
                {{ invoice.amount }}
              </TableCell>
              <TableCell class="flex justify-center">
                <Badge class="w-20 flex justify-center" variant="secondary">{{
                  invoice.status
                }}</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-ellipsis"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-28">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                      <span class="text-xs">Edit Invoice</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span class="text-xs">Mark as paid</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span class="text-xs">Mark as pending</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span class="text-xs">Download invoice</span>
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogScrollContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
export default {
  components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Button,
    Badge,
    Dialog,
    DialogScrollContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    Separator,
    DialogClose,
    Textarea,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  },
  data() {
    return {
      invoices: [
        {
          invoice: '001',
          customer: 'Microsoft',
          amount: '$4000',
          status: 'PENDING',
        },
        {
          invoice: '002',
          customer: 'Tesla',
          amount: '$5431.10',
          status: 'PAID',
        },
      ],
    }
  },
}
</script>

<style></style>
