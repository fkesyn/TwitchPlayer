<template>
    <div>
        <b-form-select :id="id" v-model="selected">
            <option :value="null">{{name}}</option>
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
    items: Array
  },
  data () {
    return {
      selected: null
    }
  }
}
</script>
