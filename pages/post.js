import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Page = props => {
  return (
    <Layout>
      <div>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/[/]?p/g, '')}</p>
        <img src={props.show.image.medium} />
      </div>
    </Layout>
  );
};

Page.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched Show: ${show.name}`);

  return { show };
};

export default Page;
