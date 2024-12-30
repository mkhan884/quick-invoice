<template>
  <div class="card-wrapper w-4/6">
    <Toaster />
    <Card>
      <CardHeader class="flex flex-row justify-between">
        <div>
          <CardTitle> Invoices </CardTitle>
          <CardDescription> Manage all your invoices here </CardDescription>
        </div>
        <div class="new-invoice">
          <Button size="sm" @click="this.isDialogOpen = !this.isDialogOpen">New Invoice</Button>

          <Dialog v-model:open="isDialogOpen">
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
                    v-model="invoiceNumber"
                  />
                </div>
                <div class="invoice-date flex flex-col w-full">
                  <Label for="invoice-date" class="mb-2 text-xs">Date</Label>
                  <Input class="text-xs" id="invoice-date" type="date" v-model="date" />
                </div>
                <div class="invoice-currency flex flex-col w-full">
                  <Label for="invoice-currency" class="mb-2 text-xs">Currency</Label>
                  <Input class="text-xs" id="invoice-currency" type="text" v-model="currency" />
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
                      <Input
                        class="text-xs"
                        id="company-name"
                        type="text"
                        placeholder="Name"
                        v-model="billToName"
                      />
                    </div>
                    <div class="mt-2">
                      <Label for="company-address" class="text-xs">Address</Label>
                      <Input
                        class="text-xs"
                        id="company-address"
                        type="text"
                        placeholder="Address"
                        v-model="billToAddress"
                      />
                    </div>
                    <div class="mt-2">
                      <Label for="company-number" class="text-xs">Business Number</Label>
                      <Input
                        class="text-xs"
                        id="company-number"
                        type="text"
                        placeholder="Number"
                        v-model="billToNumber"
                      />
                    </div>
                  </div>
                  <div class="right-col w-full">
                    <div class="city">
                      <Label for="city" class="text-xs">City</Label>
                      <Input
                        class="text-xs"
                        id="city"
                        type="text"
                        placeholder="City"
                        v-model="billToCity"
                      />
                    </div>
                    <div class="country mt-2">
                      <Label for="country" class="text-xs">Country</Label>
                      <Input
                        class="text-xs"
                        id="country"
                        type="text"
                        placeholder="Country"
                        v-model="billToCountry"
                      />
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
                      <Input
                        class="text-xs"
                        id="name"
                        type="text"
                        placeholder="Name"
                        v-model="billFromName"
                      />
                    </div>
                    <div class="mt-2">
                      <Label for="address" class="text-xs">Address</Label>
                      <Input
                        class="text-xs"
                        id="address"
                        type="text"
                        placeholder="Address"
                        v-model="billFromAddress"
                      />
                    </div>
                    <div class="mt-2">
                      <Label for="number" class="text-xs">Phone Number</Label>
                      <Input
                        class="text-xs"
                        id="number"
                        type="text"
                        placeholder="Number"
                        v-model="billFromNumber"
                      />
                    </div>
                  </div>
                  <div class="right-col w-full">
                    <div class="city">
                      <Label for="city" class="text-xs">City</Label>
                      <Input
                        class="text-xs"
                        id="city"
                        type="text"
                        placeholder="City"
                        v-model="billFromCity"
                      />
                    </div>
                    <div class="country mt-2">
                      <Label for="country" class="text-xs">Country</Label>
                      <Input
                        class="text-xs"
                        id="country"
                        type="text"
                        placeholder="Country"
                        v-model="billFromCountry"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Separator />
              <div class="items">
                <div class="items-header flex justify-between">
                  <div class="items-label">
                    <Label for="items-label">Item</Label>
                  </div>
                </div>
                <div class="description">
                  <Label for="description-label" class="text-xs">Description</Label>
                  <Input
                    class="text-xs"
                    id="description-input"
                    type="text"
                    placeholder="Description"
                    v-model="description"
                  />
                </div>
                <div class="rate-quantity-total flex space-x-4 mt-1">
                  <div class="rate w-full">
                    <Label for="rate-label" class="text-xs">Rate</Label>
                    <Input
                      class="text-xs"
                      id="rate-input"
                      type="number"
                      placeholder="Rate"
                      v-model="rate"
                    />
                  </div>
                  <div class="quantity w-full">
                    <Label for="quantity-label" class="text-xs">Quantity</Label>
                    <Input
                      class="text-xs"
                      id="quantity-input"
                      type="number"
                      placeholder="Quantity"
                      v-model="quantity"
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
                      v-model="total"
                    />
                  </div>
                </div>
              </div>
              <div class="notes !m-0">
                <Label for="notes-label" class="text-xs">Notes</Label>
                <Textarea placeholder="Type your notes here." v-model="notes" />
              </div>
              <div class="balance !m-0">
                <div class="balance-label">
                  <Label for="balance-label" class="text-xs">Balance Due</Label>
                </div>
                <div class="balance-amount">
                  <Badge class="text-sm font-bold" variant="secondary" v-model="total">
                    {{ currency }} {{ total }}
                  </Badge>
                </div>
              </div>
              <DialogFooter>
                <Button size="sm" type="submit" @click.prevent="createInvoice">Create</Button>
              </DialogFooter>
            </DialogScrollContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table v-if="invoices.length !== 0" class="text-xs">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead class="text-center">Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="invoice in invoices" :key="invoice.invoice" :invoice="invoice">
              <TableCell>
                {{ invoice.invoice_date }}
              </TableCell>
              <TableCell>
                {{ invoice.invoice_number }}
              </TableCell>
              <TableCell>
                {{ invoice.bill_to_name }}
              </TableCell>
              <TableCell> {{ invoice.currency }} {{ invoice.total }} </TableCell>
              <TableCell class="align-middle text-center">
                <Badge class="w-20 justify-center" variant="secondary">{{ invoice.status }}</Badge>
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
                      <DropdownMenuItem @click="handleTableDropdownAction('editInvoice', invoice)">
                        <span class="text-xs">Edit Invoice</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem @click="openDeleteDialog(invoice)">
                        <span class="text-xs">Delete Invoice</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span
                          class="text-xs"
                          @click="handleTableDropdownAction('downloadInvoice', invoice)"
                          >Download invoice</span
                        >
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span
                          class="text-xs"
                          @click="handleTableDropdownAction('markAsPaid', invoice)"
                          >Mark as paid</span
                        >
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span
                          class="text-xs"
                          @click="handleTableDropdownAction('markAsPending', invoice)"
                          >Mark as pending</span
                        >
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>

            <AlertDialog v-model:open="confirmDeleteDialog">
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the invoice from our
                    servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction @click="deleteInvoice()">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div class="editDialog">
              <Dialog v-model:open="isEditDialogOpen">
                <DialogScrollContent class="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Edit Invoice</DialogTitle>
                    <DialogDescription>
                      Edit your invoice here. Click update when you're done.
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
                        v-model="invoiceNumber"
                      />
                    </div>
                    <div class="invoice-date flex flex-col w-full">
                      <Label for="invoice-date" class="mb-2 text-xs">Date</Label>
                      <Input class="text-xs" id="invoice-date" type="date" v-model="date" />
                    </div>
                    <div class="invoice-currency flex flex-col w-full">
                      <Label for="invoice-currency" class="mb-2 text-xs">Currency</Label>
                      <Input class="text-xs" id="invoice-currency" type="text" v-model="currency" />
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
                          <Input
                            class="text-xs"
                            id="company-name"
                            type="text"
                            placeholder="Name"
                            v-model="billToName"
                          />
                        </div>
                        <div class="mt-2">
                          <Label for="company-address" class="text-xs">Address</Label>
                          <Input
                            class="text-xs"
                            id="company-address"
                            type="text"
                            placeholder="Address"
                            v-model="billToAddress"
                          />
                        </div>
                        <div class="mt-2">
                          <Label for="company-number" class="text-xs">Business Number</Label>
                          <Input
                            class="text-xs"
                            id="company-number"
                            type="text"
                            placeholder="Number"
                            v-model="billToNumber"
                          />
                        </div>
                      </div>
                      <div class="right-col w-full">
                        <div class="city">
                          <Label for="city" class="text-xs">City</Label>
                          <Input
                            class="text-xs"
                            id="city"
                            type="text"
                            placeholder="City"
                            v-model="billToCity"
                          />
                        </div>
                        <div class="country mt-2">
                          <Label for="country" class="text-xs">Country</Label>
                          <Input
                            class="text-xs"
                            id="country"
                            type="text"
                            placeholder="Country"
                            v-model="billToCountry"
                          />
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
                          <Input
                            class="text-xs"
                            id="name"
                            type="text"
                            placeholder="Name"
                            v-model="billFromName"
                          />
                        </div>
                        <div class="mt-2">
                          <Label for="address" class="text-xs">Address</Label>
                          <Input
                            class="text-xs"
                            id="address"
                            type="text"
                            placeholder="Address"
                            v-model="billFromAddress"
                          />
                        </div>
                        <div class="mt-2">
                          <Label for="number" class="text-xs">Phone Number</Label>
                          <Input
                            class="text-xs"
                            id="number"
                            type="text"
                            placeholder="Number"
                            v-model="billFromNumber"
                          />
                        </div>
                      </div>
                      <div class="right-col w-full">
                        <div class="city">
                          <Label for="city" class="text-xs">City</Label>
                          <Input
                            class="text-xs"
                            id="city"
                            type="text"
                            placeholder="City"
                            v-model="billFromCity"
                          />
                        </div>
                        <div class="country mt-2">
                          <Label for="country" class="text-xs">Country</Label>
                          <Input
                            class="text-xs"
                            id="country"
                            type="text"
                            placeholder="Country"
                            v-model="billFromCountry"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div class="items">
                    <div class="items-header flex justify-between">
                      <div class="items-label">
                        <Label for="items-label">Item</Label>
                      </div>
                      <!-- <div class="items-btn align-top">
                    <Button class="" variant="link" size="sm">Add Item</Button>
                  </div> -->
                    </div>
                    <div class="description">
                      <Label for="description-label" class="text-xs">Description</Label>
                      <Input
                        class="text-xs"
                        id="description-input"
                        type="text"
                        placeholder="Description"
                        v-model="description"
                      />
                    </div>
                    <div class="rate-quantity-total flex space-x-4 mt-1">
                      <div class="rate w-full">
                        <Label for="rate-label" class="text-xs">Rate</Label>
                        <Input
                          class="text-xs"
                          id="rate-input"
                          type="number"
                          placeholder="Rate"
                          v-model="rate"
                        />
                      </div>
                      <div class="quantity w-full">
                        <Label for="quantity-label" class="text-xs">Quantity</Label>
                        <Input
                          class="text-xs"
                          id="quantity-input"
                          type="number"
                          placeholder="Quantity"
                          v-model="quantity"
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
                          v-model="total"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="notes !m-0">
                    <Label for="notes-label" class="text-xs">Notes</Label>
                    <Textarea placeholder="Type your notes here." v-model="notes" />
                  </div>
                  <div class="balance !m-0">
                    <div class="balance-label">
                      <Label for="balance-label" class="text-xs">Balance Due</Label>
                    </div>
                    <div class="balance-amount">
                      <Badge class="text-sm font-bold" variant="secondary" v-model="total">
                        {{ currency }} {{ total }}
                      </Badge>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button size="sm" type="submit" @click.prevent="editInvoice">Update</Button>
                  </DialogFooter>
                </DialogScrollContent>
              </Dialog>
            </div>
          </TableBody>
        </Table>
        <div class="no-invoice h-40 flex justify-center items-center" v-else>
          <div class="message flex flex-col h-fit w-fit">
            <div class="flex justify-center text-sm text-primary font-medium">
              You have no invoices available
            </div>
            <div class="text-xs text-muted-foreground">
              It seems there are no invoices to display. You can create a new invoice to get
              started.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import NewInvoiceDialog from './NewInvoiceDialog.vue'
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import axios from 'axios'
import { invoicePDF } from '../../helpers/invoicePDF'

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
    Toaster,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    NewInvoiceDialog
  },
  data() {
    return {
      invoicenumber: '',
      date: '',
      currency: '',
      billToName: '',
      billToAddress: '',
      billToCity: '',
      billToCountry: '',
      billToNumber: '',
      billFromName: '',
      billFromAddress: '',
      billFromCity: '',
      billFromCountry: '',
      billFromNumber: '',
      description: '',
      rate: 0,
      quantity: 0,
      notes: '',
      status: '',
      isDialogOpen: false,
      invoices: [],
      confirmDeleteDialog: false,
      selectedInvoice: null,
      isDialogOpen: false,
      isEditDialogOpen: false,
    }
  },
  mounted() {
    this.getInvoices()
  },
  computed: {
    total() {
      return this.rate * this.quantity
    },
  },
  watch: {
    isEditDialogOpen(newVal) {
      if (!newVal) {
        this.resetForm() // Reset form when dialog is closed
      }
    },
  },
  methods: {
    async createInvoice() {
      const { toast } = useToast()
      const token = localStorage.getItem('authToken')
      try {
        const response = await axios.post(
          'http://localhost:3000/invoice/create',
          {
            invoice_number: this.invoiceNumber,
            invoice_date: this.date,
            bill_from_name: this.billFromName,
            bill_from_address: this.billFromAddress,
            bill_from_city: this.billFromCity,
            bill_from_country: this.billFromCountry,
            bill_from_phone_number: this.billFromNumber,
            bill_to_name: this.billToName,
            bill_to_address: this.billToAddress,
            bill_to_city: this.billToCity,
            bill_to_country: this.billToCountry,
            bill_to_phone_number: this.billToNumber,
            description: this.description,
            quantity: this.quantity,
            rate: this.rate,
            total: this.total,
            currency: this.currency,
            notes: this.notes,
            status: this.status,
          },
          { headers: { Authorization: `Bearer ${token}` } },
        )
        toast({
          description: response.data.message,
        })
        this.isDialogOpen = !this.isDialogOpen
        this.resetForm()
        this.getInvoices()
      } catch (err) {
        toast({
          description: err.response.data.error,
        })
      }
    },
    async deleteInvoice() {
      const { toast } = useToast()
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.delete('http://localhost:3000/invoice/delete', {
          headers: { Authorization: `Bearer ${token}` },
          data: { id: this.selectedInvoice.id }, // Pass the data here
        })
        this.getInvoices()
        toast({ description: response.data.message })
      } catch (err) {
        toast({ description: 'Unable to delete the invoice' })
      }
    },
    async editInvoice() {
      console.log('hello')
    },
    async getInvoices() {
      const token = localStorage.getItem('authToken')
      try {
        const response = await axios.get('http://localhost:3000/invoice/get', {
          headers: { Authorization: `Bearer ${token}` },
        })
        this.invoices = response.data.invoices.map((invoice) => ({
          ...invoice,
          invoice_date: new Date(invoice.invoice_date).toISOString().split('T')[0],
        }))
      } catch (err) {
        console.error(err.response.data.error)
      }
    },
    async handleTableDropdownAction(action, invoice) {
      switch (action) {
        case 'editInvoice':
          this.isEditDialogOpen = true
          this.invoiceNumber = invoice.invoice_number
          this.date = invoice.invoice_date
          this.currency = invoice.currency
          this.billToName = invoice.bill_to_name
          this.billToAddress = invoice.bill_to_address
          this.billToCity = invoice.bill_to_city
          this.billToCountry = invoice.bill_to_country
          this.billToNumber = invoice.bill_to_phone_number
          this.billFromName = invoice.bill_from_name
          this.billFromAddress = invoice.bill_from_address
          this.billFromCity = invoice.bill_from_address
          this.billFromCountry = invoice.bill_from_country
          this.billFromNumber = invoice.bill_from_phone_number
          this.description = invoice.description
          this.rate = invoice.rate
          this.quantity = invoice.quantity
          this.notes = invoice.notes
          this.status = invoice.status
          break

        case 'deleteInvoice':
          this.confirmDeleteDialog = true
          break

        case 'markAsPending':
          if (invoice.status === 'PENDING') break
          try {
            const token = localStorage.getItem('authToken')
            await axios.patch(
              `http://localhost:3000/invoice/changeStatus/${invoice.id}`,
              {
                status: 'PENDING',
              },
              { headers: { Authorization: `Bearer ${token}` } },
            )
            this.getInvoices()
          } catch (err) {
            console.error(err)
            break
          }
          break

        case 'markAsPaid':
          if (invoice.status === 'PAID') break
          try {
            const token = localStorage.getItem('authToken')
            const response = await axios.patch(
              `http://localhost:3000/invoice/changeStatus/${invoice.id}`,
              {
                status: 'PAID',
              },
              { headers: { Authorization: `Bearer ${token}` } },
            )
            this.getInvoices()
          } catch (err) {
            console.error(err)
            break
          }
          break

        case 'downloadInvoice':
          const { toast } = useToast()
          try {
            await invoicePDF(invoice)
          } catch (err) {
            toast({
              description: 'Unable to download the invoice.',
            })
          }
          break
      }
    },
    openDeleteDialog(invoice) {
      this.selectedInvoice = invoice
      this.confirmDeleteDialog = true
    },
    resetForm() {
      this.invoiceNumber = ''
      this.date = ''
      this.currency = ''
      this.billToName = ''
      this.billToAddress = ''
      this.billToNumber = ''
      this.billToCity = ''
      this.billToCountry = ''
      this.billFromName = ''
      this.billFromAddress = ''
      this.billFromNumber = ''
      this.billFromCity = ''
      this.billFromCountry = ''
      this.description = ''
      this.rate = 0
      this.quantity = 0
      this.total = 0
      this.notes = ''
    },
  },
}
</script>
