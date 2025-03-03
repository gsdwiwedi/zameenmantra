<template>
    <div class="">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56092.830290365535!2d77.41281875!3d28.515607499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737269809343!5m2!1sen!2sin"
            width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="mx-3 grid lg:grid-cols-8 my-12 lg:gap-12 lg:max-w-7xl lg:mx-auto">
    <div class="lg:col-span-6 ">
        <PropertySubmitFormFeedComp  :current-tab="currentTab"
        @change-component-by-icon="onChangeHanlder" />
         <!-- Dynamic component for form  -->
    <Transition
      name="fade"
      mode="out-in"
    >
      <KeepAlive>
        <component
          :is="tabs[tabId as keyof typeof tabs]"
          @change-component="changeComponent"
        />
      </KeepAlive>
    </Transition>
    </div>
    <div class="lg:col-span-2">
        <PropertySubmitFormOurListing />
        <PropertySubmitFormFeatureProperty />
        <PropertySubmitFormLogin />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Media from '~/components/PropertySubmitForm/Media.vue';
import Description from '~/components/PropertySubmitForm/Description.vue';
import Amenities from '~/components/PropertySubmitForm/Amenities.vue';
import Details from '~/components/PropertySubmitForm/Details.vue';
import Location from '~/components/PropertySubmitForm/Location.vue';

const currentTab = ref("Description");
const tabs = { Media, Description, Amenities, Details, Location };
const tabId = ref("Description");

/**
 * Function to handle tabs switch
 */
function changeComponent(comp) {
  currentTab.value = comp;
  tabId.value = comp;
}

/**
 * Function to handle tabs switch
 */
function onChangeHanlder(id) {
  tabId.value = id;
}

</script>

<style scoped>
iframe {
    width: 100%;
    height: 500px;
    filter: invert(100%);
}
</style>