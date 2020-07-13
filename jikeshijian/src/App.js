import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Tabs, Row, Col, Radio, Table, Button } from 'antd';
import Antd from './component/antd';
import axios from 'axios'
import './mockjs/data.js'
const { TabPane } = Tabs;
const { mode } = Radio;


function callback(key) {
  console.log(key);
}

const overTable = [{
  title: '全部',
  key: 1
},
{
  title: '未学完',
  key: 2
}, {
  title: '已学完',
  key: 3
},]


const overRadio = [{
  title: '所有形式',
  key: 1
},
{
  title: '专栏',
  key: 2
},
{
  title: '视频课',
  key: 3
},
{
  title: '微课',
  key: 4
},
{
  title: '每日一课',
  key: 5
},
{
  title: '其他',
  key: 6
}
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      size: 'small',
      overKey: 1,
      allLesson: [],
      lesson: [],
      mode: 'top',
      allKey: 1
    }
  }

  changeOverTab = e => {
    this.setState({
      overKey: e
    })

    // filterLesson();
  }
  changeoverRadio = e => {
    this.setState({
      allKey: e
    })
  }
  
  // filterLesson() {

  // }

  // onChange = e => {
  //   this.setState({ size: e.target.value });
  // };

  // handleModeChange = e => {
  //   const mode = e.target.value;
  //   this.setState({ mode });
  // };

  // handleSizeChange = e => {
  //   this.setState({ size: e.target.value });
  // };

  componentDidMount() {
    axios.get('/data')
      .then(res => {
        console.log(res, '+++++++++++++++++')
        this.setState({
          lesson: res.data.list,
          allLesson: res.data.list,
          learned: res.data.list
        })
      })
  }
  render() {
    
    const { lesson,size, overKey, allKey } = this.state;
    let lessons
    if(overKey == 0){
      lessons = lesson
      if(allKey == 0){
        lessons =lesson
      }else{
        lessons = lesson.filter(a => a.key1 == allKey)
      }
    }else if(overKey == 1 ){
       lessons = lesson.filter(a=>a.key = overKey)
       if(allKey == 0){
        lessons =lesson
      }else{
        lessons = lesson.filter(a => a.key1 == allKey)
      }
    }else{
      lessons = lesson.filter(a=>a.key = overKey)
       if(allKey == 0){
        lessons =lesson
      }else{
        lessons = lesson.filter(a => a.key1 == allKey)
      }
    }
    return (
      <div className="App">
        <h1 className="title">我的课程</h1>
        <Tabs defaultActiveKey={overKey} onChange={this.changeOverTab.bind(this)}>
          {
            overTable.map(tab => (
              <TabPane tab={tab.title} key={tab.key}>

              </TabPane>

            ))
          }

          {/* <Antd /> */}
          {/* </TabPane> */}
        </Tabs>

        <div className="Nav">
          {/* <Radio.Group onChange={this.handleModeChange.bind(this)} value={mode} style={{ marginBottom: 8 }}>
         </Radio.Group>  */}
          <Tabs defaultActiveKey={allKey} tabPosition={mode} style={{ height: 100 }} >
            {
              overRadio.map((radio) => {
                console.log(lessons)
                return (
                  <TabPane tab={radio.title} key={radio.key} >
                    {lessons.map((a) => {
                      console.log(a)
                      return (
                        // <React
                        <Row className="row">
                          <Col span={10}>
                            <img src={a.image} alt="" />
                            {a.title}</Col>
                          <Col span={4}>专栏</Col>
                          <Col span={8}>
                            <Button type="study">
                              开始学习
                            </Button></Col>
                        </Row>
                      )
                    })}
                  </TabPane>
                )
              }
              )
            }
          </Tabs>
        </div>
        {/* <Antd></Antd> */}
      </div>
    );
  }
}

export default App;