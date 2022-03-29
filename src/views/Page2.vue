<template>
  <div class="page2">
    <Form title="Tell us about yourself"
          @success="onFormSuccess"
          @error="onFormError">
      <template v-slot:submit>
        <button @click="onBackClick">Back</button>
        <button type="submit">Next</button>
      </template>
    </Form>
  </div>
</template>

<script>
import Form from '../components/Form';

export default {
  name: 'Page2',
  components: {
    Form,
  },
  methods: {
    onBackClick() {
      this.$router.push({ name: 'page1' });
    },
    onFormSuccess(value) {
      const { name, age, location, premium } = value;

      this.$router.push({
        path: '/page3', query: {
          name,
          age,
          location,
          package: value.package,
          premium: premium
        }
      });
    },
    onFormError(error) {
      this.$router.push({
        path: '/page2-error', query: {
          message: error
        }
      });
    }
  }
};
</script>
