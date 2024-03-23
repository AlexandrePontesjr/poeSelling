/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WpXAzX0lEPo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { ClipboardPen, Home, MagnetIcon, Package, Package2 } from "lucide-react";

export default function HomeAdminV0() {
  return (
    <div class="flex min-h-screen w-full">
   <div class="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div class="flex h-full max-h-screen flex-col gap-2">
         <div class="flex h-14 items-center border-b px-4">
            <a class="flex items-center gap-2 font-semibold" href="#" rel="ugc">
               <Package2 />
               <span class="">Acme Inc</span>
            </a>
         </div>
         <div class="flex-1 overflow-auto py-2">
            <nav class="grid items-start px-4 text-sm font-medium">
               <a class="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" href="#" rel="ugc">
                  <Home />
                  Home
               </a>
               <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#" rel="ugc">
                  Orders
                  <div class="whitespace-nowrap border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                     6
                  </div>
               </a>
               <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#" rel="ugc">
                  <Package/>
                  Products
               </a>
               <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#" rel="ugc">
                  <ClipboardPen/>
                  Customers
               </a>
               <a class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#" rel="ugc">
                  <MagnetIcon/>
                  Analytics
               </a>
            </nav>
         </div>
      </div>
   </div>
   <div class="flex flex-col w-full">
      <header class="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-4 dark:bg-gray-800/40">
         <a class="lg:hidden" href="#" rel="ugc">
            <Home/>
            <span class="sr-only">Home</span>
         </a>
         <div class="w-full">
            <form>
               <div class="relative">
                  <Package2 class="h-5 w-5 text-gray-400" />
                  <input type="search" class="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950" placeholder="Search products..." />
               </div>
            </form>
         </div>
         <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800" type="button" id="radix-:Rdlafnnja:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
         
         <span class="sr-only">Toggle user menu</span></button>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
         <div class="flex items-center">
            <h1 class="font-semibold text-lg md:text-2xl">Home</h1>
            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
            New order
            </button>
         </div>
         <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
               <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Recent Orders</h3>
               <p class="text-sm text-muted-foreground">Latest customer orders</p>
            </div>
            <div class="p-0">
               <div class="relative w-full overflow-auto">
                  <table class="w-full caption-bottom text-sm">
                     <thead class="[&amp;_tr]:border-b">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">Order</th>
                           <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Customer</th>
                           <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              Date
                           </th>
                           <th class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">Total</th>
                        </tr>
                     </thead>
                     <tbody class="[&amp;_tr:last-child]:border-0">
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted font-medium">
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"><a class="underline" href="#" rel="ugc">
                              #001
                              </a>
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">John Doe</td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              2023-06-15
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$250</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"><a class="underline" href="#" rel="ugc">
                              #002
                              </a>
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">Alice Smith</td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              2023-06-16
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$125</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"><a class="underline" href="#" rel="ugc">
                              #003
                              </a>
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">Kelly Johnson</td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              2023-06-17
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$200</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"><a class="underline" href="#" rel="ugc">
                              #004
                              </a>
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">Bob Brown</td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              2023-06-18
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$300</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"><a class="underline" href="#" rel="ugc">
                              #005
                              </a>
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">Emma Lee</td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                              2023-06-19
                           </td>
                           <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$150</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </main>
   </div>
</div>
  )
}