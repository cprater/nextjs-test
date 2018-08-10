import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <a>{props.title}</a>
  </Link>
)

const Index = () => {
  return (
    <Layout>
      <p>Ze Blog</p>
      <ul>
        <li>
          <PostLink id="hello" title="Hello Next.js" />
        </li>
        <li>
          <PostLink id="learn" title="Learn Next.js is awesoe" />
        </li>
        <li>
          <PostLink id="deploy" title="Deploy the stuf with zeit" />
        </li>
      </ul>
    </Layout>
  );
};

export default Index;
