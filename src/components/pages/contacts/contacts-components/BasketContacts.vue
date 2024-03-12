<template>
  <div class="contacts">
    <div class="contacts__container">
      <div class="contacts__container__form basket-form">
        <el-form
            ref="formRef"
            :model="dynamicValidateForm"
            :size="formSize"
            @submit="handleSubmit"
        >
          <el-form-item prop="fullName" :rules="fullNameValidation">
            <el-input
                placeholder="ФИО*"
                input-style="background"
                v-model="dynamicValidateForm.fullName"
            />
          </el-form-item>
          <el-form-item prop="email" :rules="emailValidationRules">
            <el-input
                placeholder="E-mail*"
                v-model="dynamicValidateForm.email"
            />
          </el-form-item>
          <el-form-item prop="phone" :rules="phoneValidationRules">
            <el-input
                type="number"
                placeholder="Phone Number*"
                v-model="dynamicValidateForm.phone"
            />
          </el-form-item>
          <el-button @click="sendEmail">
            {{$t('Заказать Сейчас')}}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BasketContacts",
  data() {
    return {
      dynamicValidateForm: {
        email: '',
        fullName: '',
        phone: '',
      },
      emailValidationRules: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input a correct email address',
          trigger: ['blur', 'change'],
        },
      ],
      phoneValidationRules: [
        {
          required: true,
          message: 'Please input phone number',
          trigger: 'blur',
        },
        {
          type: 'phone',
          message: 'Please input a correct phone number',
          trigger: ['blur', 'change'],
        },
      ],
      fullNameValidation: [
        {
          required: true,
          message: 'Please input your initials',
          trigger: 'blur',
        },
      ],
      message: '', // To bind the message area
    }
  },
  methods: {
    sendEmail() {
      // Combine name, email, and message with chosen products and counts
      const emailContent = {
        fullName: this.dynamicValidateForm.fullName,
        email: this.dynamicValidateForm.email,
        message: this.createMessageContent(),
        phone: this.dynamicValidateForm.phone,
      }
      // Now, send the email using Axios or any other method
      this.sendEmailViaAxios(emailContent);
    },
    createMessageContent() {
      // Initialize an empty string for the message content
      let content = '';
      // Loop through each product in the cartItems
      for (const product of this.$store.state.cartItems) {
        // Append the product title and count to the message content
        content += `${product.title}: ${product.count}\n`;
      }
      // Return the constructed message content
      return content;
    },
    async sendEmailViaAxios(emailContent) {
      try {
        let res = await axios.post('http://localhost:8000/send-mail', emailContent); //m1.weflex.am
        console.log('RES => ', res);
      } catch (e) {
        console.error('err => ', e);
      }
    }
  }
}
</script>
