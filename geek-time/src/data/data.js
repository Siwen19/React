import Mock, { Random } from 'mockjs'; 

export default Mock.mock('/posts/', 'get', { 
    "list|6-10": [{
        "title": "@ctitle()",
        "image": "@image('75x75', @color)",
        "lessons": "@integer(40, 50)",
        "learned": "@integer(10, 45)"
    }]
})
