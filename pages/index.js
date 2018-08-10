import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const PostLink = show => (
  <Link as={`/p/${show.id}`} href={`/post?title=${show.id}`}>
    <a>{show.name}</a>
  </Link>
)

const Index = props => {
  return (
    <Layout>
      <p>Ze Blog</p>
      <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Fetch-a-roni Count: ${data.length}`);

  return {
    'shows': data
  };
};

export default Index;
