<template>
  <div>
    <div>
      <ContactsForm/>
    </div>

    <div>
      <ContactsMap/>
    </div>
  </div>
</template>

<script>
import ContactsForm from "@/components/pages/contacts/contacts-components/ContactsForm.vue";
import ContactsMap from "@/components/pages/contacts/contacts-components/ContactsMap.vue";

export default {
  name: "ContactsPage",
  components: {ContactsMap, ContactsForm}
}
</script>

<style scoped lang="scss">

</style>