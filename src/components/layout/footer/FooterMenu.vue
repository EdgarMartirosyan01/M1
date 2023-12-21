<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__top__title-container">
        <div class="footer__top__title-container__title">
          <span>{{$t('ХОТИТЕ ЗАДАТЬ ВОПРОС ')}}</span>
          <span class="footer__top__title-container__title__red">{{$t('ИЛИ ЗАКАЗАТЬ МАТЕРИАЛЫ?')}}</span>
        </div>
        <div class="footer__top__title-container__description">
          {{$t('Наши специалисты будут рады проконсультировать, помочь с выбором и расчетом материала под ваши задачи.')}}
        </div>
      </div>
      <div class="footer__top__form-container footer-form">
        <el-form
            ref="formRef"
            :model="dynamicValidateForm"
        >
          <div class="d-flex gap-2">
            <el-form-item
                prop="fullName"
                :rules="fullNameValidation">
              <el-input
                  placeholder="Имя"
                  input-style="background"
                  v-model="dynamicValidateForm.fullName"
              />
            </el-form-item>
            <el-form-item
                prop="email"
                :rules="emailValidationRules"
            >
              <el-input
                  placeholder="e-mail"
                  v-model="dynamicValidateForm.email"
              />
            </el-form-item>
          </div>
          <el-form-item
              prop="message"
              :rules="messageValidation"
          >
            <div class="footer-message-area">
              <el-input
                  placeholder="Телефон"
                  v-model="dynamicValidateForm.message"
              />
            </div>
          </el-form-item>
        </el-form>
        <div class="footer__top__form-container__button">
          <button @click="submitForm">
            {{$t('Отправить заявку')}}
          </button>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__info">
        <div class="footer__bottom__info__logo">
          <img src="@/assets/images/M1-Footer.png" alt="M1">
        </div>
        <div class="footer__bottom__info__initials">
          <span>{{$t('Адрес TestStreet 14/4')}}</span>
          <span>{{$t('Номер TestPhoneNumber')}}</span>
          <span>{{$t('Email TestMail.ru')}}</span>
        </div>
      </div>
      <div class="footer__bottom__rights">
        <span>
          {{$t('2023 All rights reserved')}}
        </span>
        <span>
          {{$t('Developed and designed by  Weflex')}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMenu",
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
    // submitForm() {
    //   this.$refs.formRef.validate((valid) => {
    //     if (valid) {
    //       console.log('submit!');
    //     } else {
    //       console.log('error submit!');
    //       return false;
    //     }
    //   });
    // },
  },
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__top {
    background: #777676;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 221px;
    &__title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 166px 0 0;
      gap: 30px;
      &__title {
        color: #FFF;
        font-family: Montserrat;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        display: flex;
        flex-direction: column;

        &__red {
          color: #DF2129;
        }
      }
      &__description {
        max-width: 488px;
        color: #FFF;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }
    }
    &__form-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      &__button {
        padding-top: 30px;
        button {
          color: #FFF;
          text-align: center;
          font-family: Montserrat;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          padding: 13px 43px;
          border: none;
          background: #DF2129;
          cursor: pointer;
        }
        button:hover {
          background: white;
          border: 2px solid #000;
          color: black;
          transition: 0.3s;
        }
      }
    }
  }
  &__bottom {
    width: 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__info {
      display: flex;
      justify-content: space-between;
      padding: 50px 68px 105px 68px;
      &__logo {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 239px;
          height: 86px;
        }
      }
      &__initials {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: center;
        gap: 19px;
        span {
          color: #FFF;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Montserrat;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px;
          cursor: pointer;
        }
        span:hover {
          transition: 0.3s;
          color: #DF2129 !important;
        }
      }
    }
    &__rights {
      width: 100%;
      padding: 0 68px 35px 68px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #FFF;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
      }
    }
  }
}
@media(max-width: 1756px) {
  .footer {
    &__top {
      padding: 50px 221px;
      &__title-container {
        padding: 0 176px 0 0;
        gap: 15px;
      }
    }
    &__bottom {
      &__info {
        padding: 50px 68px 105px 68px;
      }
      &__rights {
        padding: 0 68px 35px 68px;
      }
    }
  }
}
@media(max-width: 1668px) {
  .footer {
    &__top {
      padding: 50px 180px;
      &__title-container {
        padding: 0 176px 0 0;
        gap: 15px;
      }
      &__form-container {
      }
    }
    &__bottom {
      &__info {
        padding: 50px 68px 105px 68px;
      }
      &__rights {
        padding: 0 68px 35px 68px;
      }
    }
  }
}
@media(max-width: 1595px) {
  .footer {
    &__top {
      padding: 50px 84px;
      &__title-container {
        padding: 0 176px 0 0;
        gap: 15px;
      }
      &__form-container {
      }
    }
    &__bottom {
      &__info {
        padding: 50px 68px 105px 68px;
      }
      &__rights {
        padding: 0 68px 35px 68px;
      }
    }
  }
}
@media(max-width: 1383px) {
  .footer {
    &__top {
      padding: 50px 32px;
      &__title-container {
        padding: 0 176px 0 0;
        gap: 15px;
      }
    }
    &__bottom {
      &__info {
        padding: 50px 32px 105px 32px;
      }
      &__rights {
        padding: 0 32px 35px 32px;
      }
    }
  }
}
@media(max-width: 1175px) {
  .footer {
    &__top {
      padding: 50px 84px;
      flex-direction: column;
      &__title-container {
        padding: 0 0 50px 0;
        width: 100%;
        gap: 15px;
        &__title {
          padding: 0;
          width: 100%;
        }
        &__description {
          padding: 0;
          max-width: 100%;
        }
      }
      &__form-container {
        width: 100%;
      }
    }
    &__bottom {
      &__info {
        padding: 50px 68px 105px 68px;
      }
      &__rights {
        padding: 0 68px 35px 68px;
      }
    }
  }
}
@media(max-width: 992px) {
.footer {
  &__top {
    padding: 50px 32px;
    flex-direction: column;
    &__title-container {
      padding: 0 0 50px 0;
      width: 100%;
      gap: 15px;
      &__title {
        font-size: 42px;
        padding: 0;
        width: 100%;
      }
    }
    &__form-container {
      width: 100%;
    }
  }
  &__bottom {
    &__info {
      padding: 50px 32px 105px 32px;
      }
    &__rights {
      padding: 0 32px 35px 32px;
    }
    }
  }
}
@media(max-width: 606px) {
  .footer {
    &__top {
      padding: 50px 32px;
      flex-direction: column;
      &__title-container {
        padding: 0 0 50px 0;
        gap: 15px;
        &__title {
          font-size: 36px;
          font-weight: 700;
          padding: 0;
          width: 100%;
        }
      }
      &__form-container {
        width: 100%;
      }
    }
    &__bottom {
      &__info {
        padding: 16px 32px 50px 32px;
        flex-direction: column;
        &__logo {
          padding: 50px 32px 50px 32px;
        }
        &__initials {
          gap: 15px;
          align-items: center;
          justify-content: center;
        }
      }
      &__rights {
        padding: 0 32px 35px 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
