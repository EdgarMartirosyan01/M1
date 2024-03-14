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
                :placeholder="$t('ФИО*')"
                input-style="background"
                v-model="dynamicValidateForm.fullName"
                :maxlength="35"
                clearable
            />
          </el-form-item>
          <el-form-item prop="email" :rules="emailValidationRules">
            <el-input
                :placeholder="$t('E-mail*')"
                v-model="dynamicValidateForm.email"
                :maxlength="35"
                clearable
            />
          </el-form-item>
          <el-form-item prop="phone" :rules="phoneValidationRules">
            <el-input
                type="number"
                :placeholder="$t('Phone Number*')"
                v-model="dynamicValidateForm.phone"
                :maxlength="20"
                clearable
            />
          </el-form-item>
          <div class="success_message" v-if="isEmailSent">
            {{$t('ваше сообщение успешно было отправлено')}}
          </div>
          <el-button :disabled="!isFormCompleted" @click="sendEmail">
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
          message: this.$t('Please input email address'),
          trigger: 'blur',
        },
        {
          type: 'email',
          message: this.$t('Please input a correct email address'),
          trigger: ['blur', 'change'],
        },
      ],
      phoneValidationRules: [
        {
          required: true,
          message: this.$t('Please input phone number'),
          trigger: 'blur',
        },
        {
          type: 'phone',
          message: this.$t('Please input a correct phone number'),
          trigger: ['blur', 'change'],
        },
      ],
      fullNameValidation: [
        {
          required: true,
          message: this.$t('Please input your initials'),
          trigger: 'blur',
        },
      ],
      isEmailSent: false,
    }
  },
  computed: {
    isFormCompleted() {
      return Object.values(this.dynamicValidateForm).every(value => !!value);
    }
  },
  methods: {
    async sendEmail() {
      const emailContent = {
        fullName: this.dynamicValidateForm.fullName,
        email: this.dynamicValidateForm.email,
        message: this.createMessageContent(),
        phone: this.dynamicValidateForm.phone,
      }
      try {
        await axios.post('http://m1.weflex.am/send-mail', emailContent);
        this.isEmailSent = true;
        this.resetForm();
      } catch (e) {
        console.error('err => ', e);
      }
    },
    createMessageContent() {
      let content = '';
      for (const product of this.$store.state.cartItems) {
        content += `${product.title}: ${product.count}\n`;
      }
      return content;
    },
    resetForm() {
      this.dynamicValidateForm.email = '';
      this.dynamicValidateForm.fullName = '';
      this.dynamicValidateForm.phone = '';
      this.$refs.formRef.clearValidate();
    }
  },
}
</script>

<style lang="scss">
.success_message {
  color: #7fc21f;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 991px) {
  .success_message {
    font-size: 12px;
    font-weight: 5050;
    line-height: 24px;
  }
}
</style>
