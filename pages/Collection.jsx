import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0 ) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Accessory'} onChange={toggleCategory}/> Accessory
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Jewelry'} onChange={toggleCategory}/> Jewelry
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bags'} onChange={toggleCategory}/> Bags
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Makeup'} onChange={toggleCategory}/> Makeup
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Fragrance'} onChange={toggleCategory}/> Fragrance
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Combos'} onChange={toggleCategory}/> Special COMBOS
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Others'} onChange={toggleCategory}/> Others
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hair'} onChange={toggleSubCategory}/> Hair Accessory
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Neck'} onChange={toggleSubCategory}/> Silver Necklace and Earings
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Watch'} onChange={toggleSubCategory}/> Watches
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Necklace'} onChange={toggleSubCategory}/> Necklace
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Earings'} onChange={toggleSubCategory}/> Earings
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bangles'} onChange={toggleSubCategory}/> Bangles
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Anklets'} onChange={toggleSubCategory}/> Anklets
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Handbag'} onChange={toggleSubCategory}/> Hand Bags/Sling Bags
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Walletpurse'} onChange={toggleSubCategory}/> Wallet/purse
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Beauty'} onChange={toggleSubCategory}/> Beauty Products
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Skincare'} onChange={toggleSubCategory}/> Skin Care Products
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'perfume'} onChange={toggleSubCategory}/> Perfume/Bodyspray
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Athar'} onChange={toggleSubCategory}/> Athar/Roll ons
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Toys'} onChange={toggleSubCategory}/> Toys
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Showpiece'} onChange={toggleSubCategory}/> Show Pieces
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Gift'} onChange={toggleSubCategory}/> Gift Items
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Porduct Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
