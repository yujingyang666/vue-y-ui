<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon class="icon" v-if="icon" :name="icon"/>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
    export default {
      props:{
        icon:{},
        iconPosition:{
          type: String,
          default: 'left',
          validator(val){
            return val === 'left' || val === 'right';
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;
        > .icon{order: 1; margin-right: .2em}
        > .content{order: 2;}
        &:active {background-color: var(--button-active-bg);}
        &:hover {border-color: var(--border-color-hover);}
        &:focus {outline: none;}
        &.icon-right{
            > .icon{order: 2;margin-right: 0;margin-left: .2em}
            > .content{order: 1;}
        }
    }
</style>