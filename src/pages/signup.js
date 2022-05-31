import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../components/Menu/Menu'
import Signup from '../components/SignUp/signup'
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Footer from '../components/Footer/Footer';


export default () => {
  const { title, lang, description } = headData;

  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <Menu />
      <Signup />
    </>
  );
};
