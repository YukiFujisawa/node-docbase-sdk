import { DocBase } from './DocBase';
import { DocBaseResponse } from './DocBaseResponse';
import { DocBaseReqReadPosts } from './DocBaseReqReadPosts';
import { DocBaseReqCreatePost } from './DocBaseReqCreatePost';


const docBase: DocBase = new DocBase('apiToken');
const postReqRead: DocBaseReqReadPosts = <DocBaseReqReadPosts>{};
postReqRead.apiToken = 'zgkXf_q5Vrjd8CTepKCV';
postReqRead.team = 'gladd';
postReqRead.id = 339417;

docBase.readPosts(postReqRead).then((reponse: DocBaseResponse) => {
  // console.log(reponse);
});

const postReqCreate: DocBaseReqCreatePost = <DocBaseReqCreatePost>{};
postReqCreate.apiToken = 'zgkXf_q5Vrjd8CTepKCV';
postReqCreate.team = 'gladd';
postReqCreate.title = 'タイトル';
postReqCreate.body = 'body';
postReqCreate.draft = false;
postReqCreate.notice = false;
postReqCreate.scope = 'private';

docBase.createPost(postReqCreate).then((reponse: DocBaseResponse) => {
  console.log(reponse);
});

