import React, { Component } from 'react';
import {Comment,Button} from 'antd'
// 编辑器
import {Editor} from 'react-draft-wysiwyg';
// css样式
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// js转换html
import draftjs from 'draftjs-to-html'

import {GetFeed,Feed} from '../../api/admin.js'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { feeds:[],editorState:'',editorContent:''}
    }
    
    componentDidMount() {
        this.getFeed();
    }
    getFeed = ()=>{
        GetFeed()
        .then(res=>{
            this.setState({feeds:res})
        })
        .catch(err=>console.error(err))
    }
    
    onEditorStateChange=(editorState)=>{this.setState({editorState})}
    // 更新编辑器状态
    onContentStateChange=(editorContent)=>{
       this.setState({editorContent})
       // 更新内容状态
       console.log(draftjs(editorContent),"输出编辑器内容")
    }
    // 评论的
    feed=()=>{
        
        Feed({dopost:"send",aid:2,feedbacktype:"feedbacke",msg:draftjs(this.state.editorContent)})
        // 评论成功
        .then(res=>{
            // 重新获取
            this.getFeed();
            // 清空编辑器内容
            this.setState({ editorState:'',editorContent:''})
        })
        .catch(err=>console.error(err))
    }
    render() { 
        return ( <div>
            <h1>评论</h1>
            {this.state.feeds.map(item=><Comment
          key={item.id}
          author={item.username}
          avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
          content={<div dangerouslySetInnerHTML={{__html:item.msg}}></div>}
          datetime={new Date(item.dtime*1000).toLocaleString()}
        />)}
        <Editor 
        editorState={this.state.editorState}
        // 绑定编辑状态
        onContentStateChange={this.onContentStateChange}
        // 当内容发生改变时候
        onEditorStateChange={this.onEditorStateChange}
        // 当编辑器状态发生改变的时候
        >                    
        </Editor>  
        <Button onClick={this.feed}>评论</Button>
        </div> );
    }
}
 
export default Comments;