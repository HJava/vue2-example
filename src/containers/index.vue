<template>
    <div>
        <BubbleList></BubbleList>
        <TextInput></TextInput>
    </div>
</template>
<style>

</style>
<script>
    import BubbleList from '../components/bubble-list/index.vue';
    import TextInput from '../components/text-input/index.vue';
    export default{
        data(){
            return {}
        },
        components: {
            BubbleList,
            TextInput
        }
    }
</script>
