<template>
    <div class="test">
        <input type="text" v-model="title">
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.lastName"></p>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{item.title + (item.id+1)}}
            </li>
        </ul>
        <button v-on:click="greet">Greet me!</button>
        <input type="text" @keyup="pressKey" @keyup.enter="enterHit">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'Foobar'
            }
        },
        data () {
            return {
                title: 'Hello World',
                user: {
                    firstName: 'Dwight',
                    lastName: 'Ramokhola'
                },
                items: [
                    {id: 0, title: 'Item One'},
                    {id: 1, title: 'Item Two'},
                    {id: 2, title: 'Item Three'},
                    {id: 3, title: 'Item Four'},
                    {id: 4, title: 'Item Five'},
                ]
            }
        },
        methods: {
            greet: function(){
                alert('Hello');
            },
            pressKey: function(e){
                console.log(e.keyCode);
            },
            enterHit: function(){
                console.log('You pressed enter!!');
            }
        },
        computed: {
            fullName: function(){
                return this.user.firstName+ ' ' +this.user.lastName;
            }
        }
    }
</script>

<style scoped>
    
</style>