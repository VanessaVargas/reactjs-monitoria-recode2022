import React from "react";

import Header from '../components/Header';
import Banner from '../components/Banner';
import Subtitle from '../components/Subtitle';
import Card from '../components/Card';
import CliqueControl from '../components/CliqueControl';
import Lista from '../components/Lista';
import Footer from '../components/Footer';


import Aurora from '../img/aurora-boreal.jpg';

export default function Home() {
    return (
        <div className="App">
            
      <Header />
      <div className="container">

      
      <h1>Projeto de monitoria</h1>
      <Banner />
      <Subtitle subtitle="Seção de cards" />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card local="Noruega" foto={Aurora}/>
        <Card local="Noruega" foto={Aurora}/>
        <Card local="Noruega" foto={Aurora}/>
      </div>

      <Subtitle subtitle="Trocando de estados com o state" />
      <CliqueControl />
      <Subtitle subtitle="Cards utilizando map" />
      <Lista />
      <Footer />
    </div>
    </div>
    )
    
}