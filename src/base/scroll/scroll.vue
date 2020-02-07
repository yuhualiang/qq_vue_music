<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:1
        },
        data:{
            type:Array,
            default:null
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
        },20)
    },
    methods:{
        _initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:this.probeType
            })
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
    watch:{
        //监听data数据变化，如果变化了刷新整个scroll页面
        data(){
            setTimeout(()=>{
                this.refresh()
            },20)
        }
    }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/variable"
</style>