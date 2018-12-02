<template>
    <div>
        <b-form-select @input="updateValue" :id="id" v-model="selected">
            <option :value="0">{{name}}</option>
            <option v-for="item in items" :value="item"
                              :key="item">{{item}}</option>
            </b-form-select>
    </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    id: String,
    name: String,
    items: {
      type: Array,
      required: true
    },
    selectedOption: Object
  },
  data () {
    return {
      selected: this.selectedOption
    }
  },
  methods: {
    updateValue: function (value) {
      this.$store.commit('setLimit', value)
    }
  }
}
</script>
