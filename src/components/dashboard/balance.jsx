import { Component } from "react";

class Balance extends Component {
  render() {
    return (
      <>
        <div class="max-w-lg mx-auto ">
          <fieldset class="mb-5">
            <legend class="sr-only">Countries</legend>
            <div class="grid grid-cols-2  mt-5">
              <div class="flex items-center ">
                <input
                  id=""
                  type="radio"
                  name=""
                  value=""
                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="country-option-1"
                  aria-describedby="country-option-1"
                  checked=""
                />
                <label for="" class="text-sm font-medium text-gray-900  block">
                  Serial Number
                </label>
              </div>

              <div class="flex items-center">
                <input
                  id=""
                  type="radio"
                  name=""
                  value=""
                  class="h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="option-disabled"
                  aria-describedby="option-disabled"
                  disabled=""
                />
                <label for="" class="text-sm font-medium text-gray-900  block">
                  Service Number
                </label>
              </div>
            </div>
            <div>
              <label
                for=""
                class="block text-sm text-gray-500 dark:text-gray-300"
              ></label>

              <input
                type="text"
                placeholder=""
                class="block  mt-3 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>
          </fieldset>
          <button class="px-10 py-1 items-center  w-full font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Search
          </button>
        </div>
      </>
    );
  }
}

export default Balance;
