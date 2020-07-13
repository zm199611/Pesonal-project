import Mock from 'mockjs'
 
export default Mock.mock('/data','get',{
    'list|10':[{
       'title':'@title()' ,
       'finish|1-2':1,
       'learned|0-20':1,
       'lesson|20-40':20,
       'over|':5,
       'type|':6,
       'image':Mock.Random.image('100x100','#ffc0cb'),
       'type|1-5':1,
       'key|+1':1,
       'key1|+1':1
    }]    
})