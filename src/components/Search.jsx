import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss';
import { searchRequest } from '../actions';

// Components
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

const Search = (props) => {
  const { search } = props;
  const issetSearch = Object.keys(search).length > 0;

  const handleInput = (e) => {
    e.preventDefault();
    props.searchRequest(e.target.value);
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          type='text'
          className='input'
          name='search'
          placeholder='Buscar...'
          onKeyUp={handleInput}
        />
      </section>
      {
        issetSearch && (
          <Categories title='Search'>
            <Carousel>
              {search.map(item => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = {
  searchRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
