'use strict';

const { createApp } = Vue;

createApp({
    data(){
        return {
            currentImg : 0,
            images : [
                {
                    image : '01.jpg',
                    title : 'Image 1',
                    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
                },
                {
                    image : '02.jpg',
                    title : 'Image 2',
                    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
                },
                {
                    image : '03.jpg',
                    title : 'Image 3',
                    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
                },
                {
                    image : '04.jpg',
                    title : 'Image 4',
                    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
                },
                {
                    image : '05.jpg',
                    title : 'Image 5',
                    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum dolore praesentium debitis odio laboriosam'
                },
            ]
        }
    },
    methods: {
        next(){
            this.currentImg++;
            if(this.currentImg > this.images.length - 1)this.currentImg = 0;
        },
        prev(){
            this.currentImg--;
            if(this.currentImg < 0) this.currentImg = this.images.length - 1;
        },
        selectImg(index){
            this.currentImg = index;
        }
    }
}).mount('#app');