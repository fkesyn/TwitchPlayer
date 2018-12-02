<template>
    <div>
        <select @input="updateValue" :id="id" class="dropdown" v-model="selected">
            <option :value=0>{{name}}</option>
            <option v-for="item in items" :value="item"
                              :key="item">{{item}}</option>
            </select>
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
    selectedOption: Number
  },
  data () {
    return {
      selected: this.selectedOption
    }
  },
  methods: {
    updateValue: function (event) {
      this.$store.commit('setLimit', event.target.value)
    }
  }
}
</script>
<style>
    .dropdown {
        letter-spacing: 1.5px;
        width: 100%;
        height:100%;
        color: #643FA6;
        background-color: transparent;
        background-size: 18px 18px;
        border-radius: 5px;
        border: 1px solid #575756;
        font-size: 20px;
        line-height: 25px;
        padding: 12px 24px;
        margin-bottom: 20px;
    }
    .dropdown option{
        background-color: #19171C;
    }

</style>
