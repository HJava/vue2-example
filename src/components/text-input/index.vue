<template>
    <div>
        <input type="text" v-model="message"/>
        <button @click="add">提交</button>
    </div>
</template>
<style>

</style>
<script>
    import {mapActions} from 'Vuex';

    export default{
        data(){
            return {
                message: ''
            };
        },

        methods: {
            ...mapActions([
                'addMessage'
            ]),
            add(){
                console.debug(this.message)
                this.addMessage(this.message);
            }
        }

    }

</script>
