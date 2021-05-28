
import './App.css';
import { Card, Button, Typography } from 'antd';
import 'antd/dist/antd.css';
import  './App.css'
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons'

function App () {

    const { Title, Text } = Typography;
    return (
      <div className='imageB' >  
        <div className='content'>
          <ArrowLeftOutlined style={{color: '#fff',fontSize:'20px'}} />
          <div className='title'>
            <Title level={2} style={{color: '#fff'}} >Helsinki</Title>
          </div>
          <div className='textB'>
            <Text level={5} style={{color: '#fff'}} >Finland's southerm capital sits on a peninsula in the gulf of finland.</Text>
          </div >
        </div>
          <Card title={'Companions'} headStyle={{fontSize: '150%',fontWeight: 'bold'}}
          style={{ borderRadius: '25px 25px 0px 0px', position: 'fixed', bottom: '0px',right: '0px',left: '0px'}}>
            <div className='site-card-wrapper'>

              <img className='imgA' alt='' src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Rachel-Montañez.jpeg" />

              <img className='imgA' alt='' src="https://camo.githubusercontent.com/10332c8c8173fcb6a378aed254fbcc26afb7cde7330b447750c4ae7ca816506f/68747470733a2f2f692e696d6775722e636f6d2f3062794f6877512e6a7067" />

              <img className='imgA' alt='' src="https://au.godaddy.com/blog/wp-content/uploads/zoe-heard-BW-min.png" />

              <img className='imgA' alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLVGEv0s4K30cBKF3hl8NVK9OA_1utF1pKYg&usqp=CAU" />

              <img className='imgA' alt='' src="https://i.pinimg.com/474x/45/88/90/458890f75926074bb8213d27308c49e0.jpg" />
            </div>
            <div className='btn' >
              <Button type="primary" shape="round" icon={<PlusOutlined />} size='large'> Add new Companions</Button>
            </div>
          </Card>
      </div>

    );
  }

export default App;
