<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
  export default {
    props:['name']
  }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em; height: 1em;
        fill: currentColor;
        overflow: hidden;
        background: #000;
    }
</style>