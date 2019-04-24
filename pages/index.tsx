import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js!! 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <LoginComponent>
        {login => (
          <button
            onClick={async () => {
              const response = await login({
                variables: { email: 'test@test.com', password: 'password' },
              });

              console.log(response);
            }}
          >
            Call Login Mutation
          </button>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default IndexPage;
