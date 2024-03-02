<template>
  <div class="contacts">
    <div class="contacts__title" id="contact-form">
      {{$t('Контакты')}}
    </div>
    <div class="contacts__container">
      <div class="contacts__container__info">
        <div class="contacts__container__info__item">
          <a href="#map">
            <div class="contacts__container__info__item__icon">
              <img src="@/assets/images/contactsIcons/location.svg" alt="Contacts">
            </div>
            <div class="contacts__container__info__item__description">
              {{$t('РА, Араратский марз, с. Арарат, Арарат, 5 участок Ереванского шоссе.')}}
            </div>
          </a>
        </div>
        <div class="contacts__container__info__item">
          <a href="tel: +374 77 77 77">
            <div class="contacts__container__info__item__icon">
              <img src="@/assets/images/contactsIcons/phone.svg" alt="Contacts">
            </div>
            <div class="contacts__container__info__item__description">
                +374 77 77 77 77
            </div>
          </a>
        </div>
        <div class="contacts__container__info__item">
          <a href="#contact-form">
            <div class="contacts__container__info__item__icon">
              <img src="@/assets/images/contactsIcons/mail.svg" alt="Contacts">
            </div>
            <div class="contacts__container__info__item__description">
              m1groupearmenia@gmail.com
            </div>
          </a>
        </div>
      </div>
      <div class="contacts__container__form contacts-form">
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
          <el-form-item prop="message" :rules="messageValidation">
            <el-input
                placeholder="Ваше сообщение*"
                v-model="dynamicValidateForm.message"
                type="textarea"
            />
          </el-form-item>
          <el-button @click="sendEmail">
            {{$t('Отправить')}}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
  methods: {
    async sendEmail() {
      try {
        console.log(this.dynamicValidateForm)
        let res = await axios.post('http://localhost:8000/send-mail', this.dynamicValidateForm)
        console.log('RES => ', res)
      } catch (e) {
        console.error('err => ', e)
      }

    }
  }
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
      align-items: flex-start;
      justify-content: center;
      gap: 64px;
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        cursor: pointer;
        a {
          color: #000;
          text-align: center;
          font-family: Montserrat;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        &__icon {
        }
        &__description {
          max-width: 160px;
        }
      }
      &__item:hover {
        opacity: 0.8;
      }
    }
  }
}
@media(max-width: 1310px) {
  .contacts {
    padding: 60px 32px 100px 32px;
  }
}
@media(max-width: 992px) {
  .contacts {
    padding: 60px 32px 100px 32px;
    &__title {
    }
    &__container {
      width: 100%;
      height: 100%;
      gap: 72px;
      &__info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 32px;
        gap: 100px;
        &__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding-top: 65px;
          &__icon {
          }
          &__description {
            color: #000;
            text-align: center;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
      &__form {
        padding-bottom: 65px;
      }
    }
  }
}
@media(max-width: 761px) {
  .contacts {
    &__container {
      &__info {
        gap: 32px;
        &__item {
          gap: 15px;
          padding-top: 32px;
        }
      }
    }
  }
}
@media(max-width: 373px) {
  .contacts {
    &__title {
      font-size: 50px;
    }
  }
}
</style>