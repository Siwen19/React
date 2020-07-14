import Mock from 'mockjs';

export default Mock.mock('/posts/', 'get', {
    "list|3": [{
        "titles": "@ctitle()",
        "names": "@first @last",
    }]
})
