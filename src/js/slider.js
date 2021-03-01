import Vue from 'vue';

const slider = new Vue ({
    el: '#slider',
    data: {
        indexPhoto: 0,
        photos: [
            {
                img: './images/slider1.webp',
                blockquote: 'I literally couldn’t do my job or even manage all the business of being a fully functioning parent and spouse without Todoist.' ,
                signature: 'Khoi Vinh',
                role: 'Principal Designer at Adobe', 
                sub: 'Creatives'
            }, 
            {
                img: './images/slider2.webp',
                blockquote: 'As a software engineer, it’s useful to break down big projects into smaller tasks, and Todoist is perfect for that purpose.' ,
                signature: 'Tigran Hakobyan',
                role: 'Senior Product Engineer at Buffer',
                sub: 'Developers'
            }, 
            {
                img: './images/slider3.webp',
                blockquote: 'I kept track of all my school tasks in Todoist and, in 2016, I became the first one in my family to obtain a bachelor’s degree.' ,
                signature: 'Samantha Houston',
                role: 'Software Engineer',
                sub: 'Students'
            }, 
            {
                img: './images/slider4.webp',
                blockquote: 'Todoist has revolutionized the way we run our small business by helping us simplify projects and coordinate tons of details.' ,
                signature: 'Trevor Stephens',
                role: 'General Manager at Topline Builders',
                sub: 'Small Businessess'
            },
            {
                img: './images/slider5.webp',
                blockquote: 'Todoist gave us the focus to scale our company from 2 to 75 employees, $12M in VC financing, and 350+ happy enterprise customers.' ,
                signature: 'Andrew Montalenti',
                role: 'CTO at Parse.ly',
                sub: 'Entrepreneurs'
            }, 
            {
                img: './images/slider6.webp',
                blockquote: 'Todoist helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life.' ,
                signature: 'Jennifer Mattern',
                role: 'Freelancer Writer',
                sub: 'Freelancers'
            }, 
        ]
    },
    methods: {
        setPhoto(index) {
            this.indexPhoto = index;
        },
    }
});