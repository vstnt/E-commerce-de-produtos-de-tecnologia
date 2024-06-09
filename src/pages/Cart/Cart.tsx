import React from 'react';
import Navbar from '../../layout/components/Navbar';
import Footer from '../../layout/components/Footer';
import { useTheme } from '../../context/Theme/useTheme';
import { useCart } from '../../context/Cart/useCart';


const Cart: React.FC = () => {
  const { items, removeItem, clearCart } = useCart()
  const { theme } = useTheme()



  return (
    <>
        <Navbar/>
        <div id='bg' className={`pb-24 pt-44 bg-gradient-to-b px-5 min-h-[80vh] flex justify-center
        ${theme === 'dark' ? 'from-bgdarkpurple to-bgdarkblue/80 to-70% text-neutral-200' 
        : 'from-emerald-300 via-gray-100 via-[6%] to-white to-100% text-stone-900'}  `}>        
        
            <div className='w-11/12'>
                <h2 className="text-2xl font-semibold mb-4 italic ml-14">Seu carrinho de Compras</h2>
                
                {items.length === 0 ? (
                    
                    <div className={`flex justify-center items-center h-32 w-full rounded-lg
					${theme === 'dark' ? 'bg-slate-500/30 border-2 border-gray-400' 
					: 'bg-slate-500/30 border-2 border-slate-400'}`}>
                    	<p className="text-lg ">Carrinho  vazio</p>
                    </div>

                ) : (

                    <>
                        <ul className="space-y-4">
                        {items.map((item) => (
                            
							<li key={item.product_id} 
							className={`flex justify-between items-center p-4  rounded-lg
							${theme === 'dark' ? 'bg-slate-500/30 border-2 border-gray-400' 
							: 'bg-slate-500/30 border-2 border-slate-400'}`}>
								
								<div>
									<p className="text-lg font-medium">Produto ID: {item.product_id}</p>
									<p className="text-sm text-gray-500">Quantidade: {item.quantity}</p>
								</div>
								
								<button 
								onClick={() => removeItem(item.product_id)} 
								className={`px-2 pb-0.5 pt-1 rounded border transition-all duration-300  
								${theme === 'dark' ? 'text-neutral-100 border-stone-900 bg-zinc-100/20 hover:bg-zinc-100/50 hover:shadow-black hover:shadow-md' 
								: 'border-stone-900 bg-slate-100/90 hover:bg-slate-300/90 hover:shadow-sm hover:shadow-lime-500'}`}>
								Remover
                            	</button>

                            </li>
                        ))}
                        </ul>

                        <div className="mt-8 flex gap-5 justify-center">
							<button 
								onClick={clearCart} 
								className={`px-5 pb-0.5 pt-1 rounded border-2 transition-all duration-300  
								${theme === 'dark' ? 'text-neutral-100 border-stone-700 bg-zinc-100/20 hover:bg-zinc-100/50 hover:shadow-black hover:shadow-md' 
								: 'border-2 border-gray-400 bg-slate-100/90 hover:bg-slate-300/90 hover:shadow-lime-500'}`}>
								Limpar Carrinho
							</button>
							<button 
								//onClick={} 
								className={`px-5 rounded border-2 transition-all duration-300  
								${theme === 'dark' ? 'text-slate-800 border-stone-700 bg-emerald-400/90 hover:bg-emerald-300 hover:shadow-black hover:shadow-md' 
								: 'border-2 border-slate-400 bg-emerald-300 hover:bg-green-200 hover: hover:shadow-sm hover:shadow-lime-500'}`}>
								Finalizar compra
							</button>
                        </div>
                    </>

                )}
            </div>

        </div>
        <Footer/>    
    </>
  )
}

export default Cart;