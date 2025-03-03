<template>
    <Listbox>
      <div
        class="relative"
        :class="`${disabled ? 'text-gray-500' : ''}  text-sm ${wMax}`"
      >
        <label
          v-if="label"
          class="flex justify-between mb-2"
        >
          <span :class="[`${style}` || 'text-sm mb-1  text-gray-600']">{{ label
          }}<span :class="[required && 'text-red-400']">{{
            required ? "*" : ""
          }}</span>
          </span>
          <span
            v-show="alertUser"
            class="text-sm sm:text-base mb-1 text-red-400"
          >*Required</span>
        </label>
        <ListboxButton
          class="relative w-full rounded-md py-2 pl-2 pr-4 text-left"
          :class="[
            alertUser && 'border-red-200',
            customListBox
              ? 'text-base text-black bg-slate-50 py-1'
              : 'bg-white border-2 border-gray-200 text-sm sm:text-base',
            disabled ? 'bg-[#F6F5F3] cursor-not-allowed' : 'cursor-pointer',
            !options.length && 'text-gray-400 !bg-gray-50 !cursor-not-allowed',
          ]"
          :disabled="disabled"
        >
          <span
            class="block truncate"
            :class="(isCapitalize && props.modelValue) ? '!uppercase' : ''"
          >{{ selectedOption }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
  
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            v-if="options.length"
            class="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm sm:text-base"
          >
            <ListboxOption
              v-for="(option, index) in options"
              v-slot="{ active, selected, disabled }"
              :key="index"
              :value="option"
              as="template"
              :disabled="optionDisable"
              @click="!disabled && updateSelectedOption(option)"
            >
              <li
                :class="[
                  active ? 'bg-primary-dark text-white' : 'text-gray-900',
                  disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer',
                  'relative select-none py-2 px-4',
                  selected ? 'bg-primary-light text-white' : '',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate capitalize text-sm sm:text-base',
                  ]"
                >{{ option }}</span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";
  import { ChevronUpDownIcon } from "@heroicons/vue/20/solid";
  import type { PropType } from "vue";
  
  const props = defineProps({
    /**
     * Tells whether the ListBox is disabled or not
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * List of items
     */
    options: {
      default: Array as PropType<string[]>,
      required: true,
    },
    /**
     * Label to show
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Whether to check list option show with capitalize
     */
    isCapitalize: {
      type: Boolean,
      default: false,
    },
    /**
     * required or not
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Current selected item
     */
    modelValue: {
      type: String,
      default: "",
    },
    /**
     * max width
     */
    wMax: {
      type: String,
      default: "",
    },
    /**
     * Apply custom class to list box
     */
    customListBox: {
      type: Boolean,
      default: false,
    },
    /**
     * Style for label
     */
    style: {
      type: String,
      required: false,
    },
    optionDisable: {
      type: Boolean,
      required: false,
    },
  });
  const emit = defineEmits(["update:modelValue"]);
  const selectedOption = computed(() =>
    props.modelValue
      ? props.modelValue
      : props.options.length
        ? "Select an option"
        : "No option available",
  );
  const alertUser = ref(false);
  
  /**
   * Update the intermediate selected reference and
   * emits an event to update it in the parent too
   *
   */
  function updateSelectedOption(newSelectedOption: string) {
    if ((newSelectedOption === "Service Management" || newSelectedOption === "Service Cancellation") && props.optionDisable) return;
    emit("update:modelValue", newSelectedOption);
    setTimeout(() => validate(), 100);
  }
  
  /**
   * Runs validation on selected value empty or not
   *
   */
  function validate() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.required && selectedOption.value === "Select an option"
      ? (alertUser.value = true)
      : (alertUser.value = false);
  }
  
  defineExpose({
    validate, // Exposing Child Function
  });
  </script>
  