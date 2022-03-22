import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Footer from './Footer';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))];
 //allCategories returns the unique categories... just one name representing every category present

 function App() {
  const [menuItems, setMenuItems ] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  } 
  return <main className='menu section'>
    <section className='title'>
      <h2 >Our Menu</h2>
      <div className='underline'></div>
      <Categories filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
    <Footer />
  </main>;
};

export default App;
