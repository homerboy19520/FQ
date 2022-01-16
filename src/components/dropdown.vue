<template>
  <div class="dropdown" :class="{ 'm-open': isOpen }">
    <div class="dropdown__header" @click="$emit('click', index)">
      <p class="dropdown__question">{{ question }}</p>
      <svg
        class="dropdown__icon"
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.798645L5 4.79865L9 0.798645"
          stroke="#F47B56"
          stroke-width="2"
        />
      </svg>
    </div>
    <p class="dropdown__answer" v-show="isOpen">{{ answer }}</p>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    isOpen: {
      type: Boolean,
      require: true,
    },
    question: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  position: relative;
  border-bottom: 1px solid #e8e8ea;
  overflow: hidden;
  height: auto;
  cursor: pointer;

  &.m-open {
    .dropdown__icon {
      transform: rotate(180deg);
    }

    .dropdown__question {
      font-weight: 700;
      color: #1e1f36;
    }
  }

  &__icon {
    position: absolute;
    top: 7px;
    right: 16px;
    transition: transform 0.2s ease-out;
    cursor: pointer;
  }

  &__question {
    max-width: 90%;
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4b4c5f;
    margin: 0;
    transition: color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      color: #f47b56;
    }

    @media (max-width: 600px) {
      font-size: 13px;
      line-height: 16px;
    }
  }

  &__answer {
    max-width: 90%;
    font-family: "Kumbh Sans", sans-serif;
    padding-bottom: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #787887;
  }

  & p,
  & img {
    margin: 0;
    user-select: none;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
  }
}
.answerAnimation-enter-active {
  transition: all 0.2s ease;
}
.answerAnimation-leave-active {
  transition: all 0.2s ease;
}
.answerAnimation-enter,
.answerAnimation-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
