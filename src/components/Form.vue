<template>
  <form class="form"
        @submit.prevent="submit">
    <h1>{{ title }}</h1>

    <label class="field">
      Name
      <input v-model="name" placeholder="Add name">
    </label>

    <label class="field">
      Age
      <input v-model="age" placeholder="Add age">
    </label>

    <label class="field">
      Where do you live
      <select v-model="location">
        <option v-for="item in locations"
                :value="item">
          {{ item.text }}
        </option>
      </select>
    </label>

    <label v-for="item in packages"
           class="field">
      <input type="radio" :value="item.id" v-model="package">
      {{ item.text }}
    </label>

    <b>Your premium is: {{ premium }} {{ location.currency }}</b>

    <div class="submit">
      <slot name="submit">
        <button type="submit">Submit!</button>
      </slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'form',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: vm => ({
    name: '',
    age: null,
    location: null,
    package: null,

    locations: [
      { text: 'Hong Kong', currency: 'HKD' },
      { text: 'USA', currency: 'USD' },
      { text: 'Australia', currency: 'AUD' }
    ],
    rates: {
      'HKD': 1,
      'USD': 2,
      'AUD': 3
    }
  }),
  computed: {
    premium: vm => +vm.age * 10,
    packages: vm => {
      const currency = vm.location.currency;
      const rate = vm.rates[currency];
      const standard = 10 * vm.age * rate;
      const safe = standard * 1.5;
      const safeDiff = safe - standard;
      const superSafe = standard * 1.75;
      const superSafeDiff = superSafe - standard;

      return [
        { id: 'standard', text: 'Standard', value: standard },
        { id: 'safe', text: `Safe (+${safeDiff}${currency}, 50%)`, value: safe },
        { id: 'super-safe', text: `Super safe (+${superSafeDiff}${currency}, 75%)`, value: superSafe }
      ];
    },
  },
  created() {
    this.location = this.locations[0];
    this.package = this.packages[0].id;
  },
  methods: {
    submit() {
      try {
        this.validate();
        this.$emit('success', {
          name: this.name,
          age: this.age,
          location: this.location.text,
          package: this.package.value,
          premium: this.premium + this.location.currency
        });
      } catch (e) {
        this.$emit('error', e.message);
      }
    },
    validate() {
      if (this.age > 100) {
        throw new Error('Your age is over accepted limit!');
      }
    }
  }
};
</script>

<style scoped>
.form {
  display: block;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}

.field {
  display: block;
}
</style>
