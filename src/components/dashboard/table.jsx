import React from "react";

export default function Table() {
  return (
    <>
      <section class="container px-4 mx-auto ml-[200px]">
        <div class="flex items-center gap-x-3">
          <h2 class="text-lg font-medium text-black dark:text-white ml-6">Daily</h2>
        </div>

        <div class="flex flex-col ">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 dark:border-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-white-500 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400"
                      >
                        <div class="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-black border-gray-100 rounded dark:bg-grey dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <span>PLANS</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        class="px-1 py-1 text-sm font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Validity</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-1 py-1 text-sm font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400"
                      >
                        <button class="flex items-center gap-x-2">
                          <span>Benefits</span>
                        </button>
                      </th>

                     
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400"
                      >
                        
                      </th>

                      <th scope="col" class="relative py-1 px-1.5">
                        <span class="sr-only "></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-black border-gray-100 rounded dark:bg-gray-100 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-medium text-orange-600 dark:text-white ">
                                RWF 190
                              </h2>
                              <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full mr-72 bg-white dark:bg-white">
                          <span class="h-1.5 w-1.5 rounded-full bg-white"></span>

                          <h2 class="text-sm font-normal text-black-500 mr-38">
                            1 days
                          </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black dark:text-black-300 whitespace-nowrap">
                        300 MB
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <p class="px-3 py-1 text-xs text-orange-600 rounded-full dark:bg-gray-800 bg-orange-100/60">
                            View Details
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-black-500 border-white-300 rounded dark:bg-white dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-medium text-orange-600 dark:text-orange ">
                                RWF 350
                              </h2>
                              <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                          <span class="h-1.5 w-1.5 rounded-full bg-white"></span>

                          <h2 class="text-sm font-normal text-black-500">
                            1 days
                          </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black dark:text-black whitespace-nowrap">
                        500 MB
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <p class="px-3 py-1 text-xs text-orange-500 rounded-full dark:bg-gray-800 bg-pink-100/60">
                            View Details
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-black border-gray-100 rounded dark:bg-gray-100 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-medium text-orange-600 dark:text-white ">
                                RWF 590
                              </h2>
                              <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-white dark:bg-white">
                          <span class="h-1.5 w-1.5 rounded-full bg-white"></span>

                          <h2 class="text-sm font-normal text-black-500">
                            1 days
                          </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black dark:text-black-300 whitespace-nowrap">
                        1 GB
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <p class="px-3 py-1 text-xs text-orange-600 rounded-full dark:bg-gray-800 bg-orange-100/60">
                            View Details
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            class="text-black-500 border-white-300 rounded dark:bg-white dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div class="flex items-center gap-x-2">
                            <div>
                              <h2 class="font-medium text-orange-600 dark:text-orange ">
                                RWF 1,150
                              </h2>
                              <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                          <span class="h-1.5 w-1.5 rounded-full bg-white"></span>

                          <h2 class="text-sm font-normal text-black-500">
                            1 days
                          </h2>
                        </div>
                      </td>
                      <td class="px-4 py-4 text-sm text-black dark:text-black whitespace-nowrap">
                        2 GB
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"></td>
                      <td class="px-4 py-4 text-sm whitespace-nowrap">
                        <div class="flex items-center gap-x-2">
                          <p class="px-3 py-1 text-xs text-orange-500 rounded-full dark:bg-gray-800 bg-pink-100/60">
                            View Details
                          </p>
                        </div>
                      </td>
                    </tr>
                </table>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
