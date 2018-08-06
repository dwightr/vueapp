<template>
    <div class="photos">
        <h1>Photos</h1>
        <section>
            <input type="text" v-model="search" placeholder="search photos">
        </section>
        <section>
            <!-- <select name="album" id="album" v-model="selected">
                <option v-for="photo in selectedPhotos" :key="photo.albumId" :value="photo.albumId">
                    {{photo.albumId}}
                </option>
            </select> -->
        </section>
        <div v-for="photo in filteredPhotos" :key="photo.id">
            <img :src="photo.thumbnailUrl" alt="">
            <p>{{photo.title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'photos',
        data () {
            return {  
                picture: {},
                photos: [],
                search: '',
                selected: ''
            }
        },
        methods: {
            
        },
        created: function(){
            this.$http.get('http://jsonplaceholder.typicode.com/photos')
                .then(function(res){
                    // console.log(res.data);
                    this.photos = res.data;
                    // just limiting the length of the array
                    res.data.length = 100;
                });
            console.log('created ran');
        },
        computed: {
            filteredPhotos: function(){
                return this.photos.filter((photo) => {
                    return photo.title.match(this.search);
                });
            },
            selectedPhotos: function(){
                return this.photos.filter((photo) => {
                    return photo.albumId.match(this.selected);
                });
            }
            /**
              * above function's es6 equivalent
              *
              */
            // filteredPhotos: function(){
            //     var _this = this;
            //     return this.photos.filter(function(photo){
            //         return photo.title.match(_this.search);
            //     });
            // }
        }
    }
</script>

<style scoped>
    .photos::after {
        display: block;
        clear: both;
        float: none;
    }
    .photos div {
       float: left;
       margin-right: 10px;
       height: 300px;
    }
    .photos div p {
        max-width: 100px;
        text-align: center;
        margin: 20px auto;
    }
</style>