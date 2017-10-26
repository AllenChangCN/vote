<template>
    <div>
        this is the compnent other!
        <Calendar
                :value="value"
                :disabled-days-of-week="disabled"
                :format="format"
                :clear-button="clear"
                :placeholder="placeholder"
                :pane="2"
                :has-input="false"
        ></Calendar>
    </div>

</template>

<script>
    import Calendar from '../module/Calendar.vue'
    export default {
        data(){
            return{
                disabled: [],
                value: '2015-06-10',
                format: 'yyyy-MM-dd',
                clear: true,
                placeholder: 'placeholder is displayed when value is null or empty'
            }
        },

        components: {
            Calendar
        }
    }
</script>