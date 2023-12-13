<template>
  <div class="contacts">
    <div class="contacts__title">
      {{$t('Контакты')}}
    </div>
    <div class="contacts__container">
      <div class="contacts__container__info">
        <div class="contacts__container__info__item">
          <div class="contacts__container__info__item__icon">
            <img src="@/assets/images/contactsIcons/location.svg" alt="Contacts">
          </div>
          <div class="contacts__container__info__item__description">
            EVN  5/7 Str., Yerevan, Armenia
          </div>
        </div>
        <div class="contacts__container__info__item">
          <div class="contacts__container__info__item__icon">
            <img src="@/assets/images/contactsIcons/phone.svg" alt="Contacts">
          </div>
          <div class="contacts__container__info__item__description">
            +374 77 77 77 77
          </div>
        </div>
        <div class="contacts__container__info__item">
          <div class="contacts__container__info__item__icon">
            <img src="@/assets/images/contactsIcons/mail.svg" alt="Contacts">
          </div>
          <div class="contacts__container__info__item__description">
            example@mail.ru
          </div>
        </div>
      </div>
      <div class="contacts__container__form contacts-form">
        <el-form
            ref="formRef"
            :model="dynamicValidateForm"
            :size="formSize"
        >
            <el-form-item
                prop="fullName"
                :rules="fullNameValidation">
              <el-input
                  placeholder="ФИО*"
                  input-style="background"
                  v-model="dynamicValidateForm.fullName"
              />
            </el-form-item>
            <el-form-item
                prop="email"
                :rules="emailValidationRules"
            >
              <el-input
                  placeholder="E-mail*"
                  v-model="dynamicValidateForm.email"
              />
            </el-form-item>
          <el-form-item
              prop="message"
              :rules="messageValidation"
          >
              <el-input
                  placeholder="Ваше сообщение*"
                  v-model="dynamicValidateForm.message"
                  type="textarea"
              />
          </el-form-item>
          <el-button>
            {{$t('Отправить')}}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsForm",
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            key: 1,
            value: '',
          },
        ],
        email: '',
        fullName: '',
        message: '',
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
      fullNameValidation: [
        {
          required: true,
          message: 'Please input your initials',
          trigger: 'blur',
        },
      ],
      messageValidation: [
        {
          required: true,
          message: 'Please input your message',
          trigger: 'blur',
        },
      ],
      domainValidationRules: {
        required: true,
        message: 'Domain cannot be null',
        trigger: 'blur',
      },
    }
  },
}
</script>

<style scoped lang="scss">
.contacts {
  padding: 60px 72px 100px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    color: #DF2129;
    font-family: Montserrat;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding-bottom: 100px;
  }
  &__container {
    width: 880px;
    height: 652px;
    border-radius: 3px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 72px;
    &__info {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 100px;
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        &__icon {
        }
        &__description {
          color: #000;
          text-align: center;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
    &__form {
    }
  }
}
</style>