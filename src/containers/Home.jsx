import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <div className='App'>
      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map(item => <CarouselItem key={item.id} {...item} isMyList={true} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map(item => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// el metodo connect recibe las propiedades (mapStateToProps) y los eventos / acciones (mapDispatchToProps)
// y despues eso lo conectamos con nuestro componente
export default connect(mapStateToProps, null)(Home);
