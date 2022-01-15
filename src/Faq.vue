<template>
  <div class="faq">
    <div class="faq__container">
      <img
        class="faq__img faq__img_mobile"
        src="/backgroundWoman-mobile.png"
        alt="woman"
      />
      <div class="faq__box">
        <div class="faq__background">
          <img
            class="faq__img faq__img_woman"
            src="/backgroundWoman.png"
            alt="woman"
          />
          <img
            class="faq__img faq__img_box"
            src="/backgrowndBox.png"
            alt="figure"
          />
          <img
            class="faq__img faq__img_line"
            src="/backgrowndLine.png"
            alt="figure"
          />
          <img
            class="faq__img faq__img_square"
            src="/backgrowndSquare.png"
            alt="figure"
          />
        </div>
      </div>
      <div class="main">
        <section class="section">
          <h1 class="section__title">FAQ</h1>
          <div class="section__container">
            <dropdown
              v-for="(item, index) in mokData"
              :key="item.id"
              :id="item.id"
              :question="item.question"
              :answer="item.answer"
              :isOpen="state[index]"
              @click="onClick"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import dropdown from "./components/dropdown.vue";

export default {
  name: "Faq",
  components: { dropdown },

  data() {
    return {
      initialState: [],
      state: [],
      mokData: [
        {
          id: 0,
          question: "How many team members can I invite?",
          answer: "You can invite many people",
        },
        {
          id: 1,
          question: "What is the maximum file upload size?",
          answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
          id: 2,
          question: "How do I reset my password?",
          answer:
            "Log into your personal account and click the button with the text reset",
        },
        {
          id: 3,
          question: "Can I cancel my subscription?",
          answer: "Of course, you must follow the links and unsubscribe",
        },
        {
          id: 4,
          question: "Do you provide additional support?",
          answer:
            "Аt the end of the landing page there is a form with support requests",
        },
      ],
    };
  },

  methods: {
    onClick(index) {
      let elementState = this.state[index];
      this.closeAll();
      if (elementState == true) {
        this.state[index] == false;
      } else {
        this.state[index] = true;
      }
    },
    closeAll() {
      this.state = [...this.initialState];
    },
  },

  mounted() {
    this.mokData.forEach(() => this.initialState.push(false));
    this.closeAll();
  },
};
</script>

<style lang="scss">
.faq {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 600px) {
    min-height: 770px;
    padding-top: 270px;
  }

  &__container {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 65px 95px 30px 0;
    width: 100%;
    height: 100%;
    max-width: 920px;
    min-height: 510px;
    box-sizing: border-box;
    border-radius: 23px;
    box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
    background-color: #fff;

    @media (max-width: 980px) {
      padding: 24px 67px 0 0;
      min-height: 380px;
    }

    @media (max-width: 910px) {
      justify-content: center;
      align-items: flex-start;
      padding: 20px 0 0 0;
    }

    @media (max-width: 600px) {
      padding: 138px 24px 0 24px;
    }

    @media (max-width: 600px) {
      padding: 138px 16px 0 16px;
    }
  }

  &__img {
    position: absolute;
    top: 70px;
    left: 0;

    @media (max-width: 980px) {
      top: 20px;
    }

    @media (max-width: 910px) {
      filter: blur(4px);
    }

    @media (max-width: 600px) {
      display: none;
    }

    &_line {
      top: 0;
      z-index: 0;

      @media (max-width: 910px) {
        display: none;
      }
    }

    &_square {
      bottom: 0;
      z-index: 1;
      @media (max-width: 910px) {
        display: none;
      }
    }

    &_box {
      top: 206px;
      z-index: 3;
      transform: translate(-50%, 0);

      @media (max-width: 980px) {
        top: 134px;
      }
    }

    &_woman {
      z-index: 2;
      transform: translate(-84px, 0);
      height: 358px;
      width: auto;

      @media (max-width: 980px) {
        height: 320px;
      }
    }

    &_mobile {
      display: none;
      filter: blur(0);
      height: 240px;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      @media (max-width: 600px) {
        display: block;
      }
    }
  }

  &__box {
    position: absolute;
    left: 0;
    top: 0;

    @media (max-width: 910px) {
      left: calc(50% - 124px);
    }
  }

  &__background {
    position: relative;
  }
}

.main {
  min-width: 350px;
  max-width: 350px;
  z-index: 3;

  @media (max-width: 600px) {
    max-width: none;
    min-width: 0;
    width: 100%;
    min-height: 346px;
  }

  @media (max-width: 500px) {
    max-width: none;
    min-width: 0;
    width: 100%;
    min-height: 400px;
  }
}

.section {
  &__title {
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #1e1f36;
    margin: 0 0 35px 0;
    user-select: none;

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  font-family: "Kumbh Sans", sans-serif;
  background: linear-gradient(180deg, #b068e9 0%, #6463e7 100%);
  padding: 20px 70px;
  min-width: 350px;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0 24px;
    min-height: 770px;
    height: 100vh;
  }
}
</style>
