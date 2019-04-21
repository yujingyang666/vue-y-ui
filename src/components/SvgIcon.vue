/*
svg-icon的用法：
1. http://www.iconfont.cn网站上找到自己需要的图标
2. 设置自己需要的颜色（也可以直接下载下来再设置颜色）
3. 下载svg格式放到icons文件夹下边
4. 在别的文件中引用(import ‘ICONS/***.svg‘)
5. 使用<svg-icon :icon-class="" width="18" height="18"></svg-icon>
*/
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        name: {
            type: String,
            required: true
        },
        iconClass: {
            type: String,
                required: true
        },
        className: {
            type: String,
        default: ''
        }
    },
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return 'svg-icon ' + this.className
            } else {
                return 'svg-icon'
            }
        }
    }
}
</script>
