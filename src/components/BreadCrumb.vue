<template>
    <div class="breadcrumb">
        {{ title }}
    </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: ['title'],
  data () {
    return {}
  }
}
</script>

<style>

.breadcrumb{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e6dddd;
    line-height: 3;
    background: whitesmoke;
    padding-left: 1rem;
    width: 100%;
    margin: auto;
}

</style>
