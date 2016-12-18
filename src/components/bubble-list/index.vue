<template>
    <ul>
        <li v-for="message in messages">{{message}}
        </li>
    </ul>
</template>
<style>

</style>
<script>
    export default{
        computed: {
            messages(){
                return this.$store.state.message.messages
            }
        }
    }
</script>
