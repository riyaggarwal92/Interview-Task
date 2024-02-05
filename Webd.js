import React from 'react'
import '../src/web.css'

function Webd() {


    return (

        <div className='conatiner-fluid bg-stone-200'>
            <div className='row d-flex gap-x-5'>
                <div className='col-lg-12'>
                    <nav className='collaspe fixed-top navbar-collaspe bg-stone-600 py-2'>
                        <div className='row d-flex mx-auto w-10/12'>
                            <div className='col-lg-5 col-md-5 col-sm-5  '>
                                <h1 className='text-3xl text-stone-200 font-bold pl-3 pt-1 md:pt-2 md:pb-2 md:pl-1 sm:pt-2 sm:pb-2 sm:pl-1'>P O P S U G A R</h1>
                            </div>
                            <div className='col-lg-7 col-md-7 col-sm-7 text-center'>
                                <div className='hidden md:hidden sm:hidden lg:block xl:block'>
                                    <div className='flex gap-x-20 py-2  lg:pl-32'>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>HOME</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>CATEGORY</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>PRODUCTS</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>CONTACT</a>
                                        <button className='btn bg-stone-200 text-black font-semibold'>LOGIN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* heading */}

            <div className='row d-flex mt-20 text-center pt-5'>
                <div className='col-lg-3 col-md-6 col-sm-6 mx-auto bg-stone-600'>
                    <h1 className='text- md:text-3xl sm:text-3xl font-AmiriQuran text-white pt-1 pb-4'>EXPLORE FASHION</h1>
                </div>
            </div>

            {/* Slider */}

            <div className='row d-flex mt-20 '>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img className="d-block w-100" src='https://assets.vogue.com/photos/61e9c43c8aa98afba69ec2e8/master/w_1920,c_limit/00_story.jpg' alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <div className='col-lg-3 col-md-3 col-sm-3 mx-auto'>
                                    <h1 className='text-stone-600 bg-stone-100 text-3xl font-semibold font-Poppins py-4'>STREET STYLE</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            {/* about us */}

            <div className=' row d-flex mt-28'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row d-flex text-center'>
                        <div className='col-lg-2 col-md-6 col-sm-6 bg-stone-600 mx-auto'>
                            <h1 className='text-4xl md:text-3xl sm:text-3xl font-AmiriQuran text-white pt-1 pb-4'>ABOUT US</h1>
                        </div>
                    </div>
                    <div className='row d-flex mt-10 lg:w-8/12 xl:w-8/12 mx-auto'>
                        <div className='flex gap-x-1'>
                            <div className='col-lg-6 col-md-6 col-sm-6 bg-black'>
                                <img className='img-fluid w-full' src='https://www.stylecraze.com/wp-content/uploads/2018/02/Fashion-For-Women-Over-50--Outfit-Ideas-And-Wardrobe-Tips.jpg.webp' alt='error'></img>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 bg-black'>
                                <img className='img-fluid w-full h-full' src='https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg' alt='error'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex mt-5 text-center bg-stone-600 py-5'>
                        <div className='col-lg-5 col-md-6 col-sm-12 mx-auto bg-stone-200'>
                            <h2 className='text-2xl text-black py-2 font-Poppins'>We Offers The Best Street Style Looks</h2>
                        </div>
                        <div className='col-lg-8 mx-auto mt-4 bg-stone-200'>
                            <p className='text-xl font-Poppins text-black py-4 px-2'>As fashion evolved, the industry was formulated to manage the process for the consumers. The fashion world has given shape to a new industry, the 'Fashion Industry'.
                                The fashion industry was created to design, manufacture and market clothes, footwear and accessories. Before creating the apparel industry, people made clothes for themselves.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* product */}

            <div className='row d-flex mt-10'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row d-flex text-center mt-10'>
                        <div className='col-lg-2 col-md-6 col-sm-6 bg-stone-600 mx-auto'>
                            <h1 className='text-4xl md:text-3xl sm:text-3xl font-AmiriQuran text-white pt-1 pb-4'>PRODUCTS</h1>
                        </div>
                    </div>
                    <div className='row d-flex w-10/12 mx-auto text-center'>
                        <div className='col-lg-8 mx-auto mt-4'>
                            <p className='text-xl font-Poppins text-black py-2 '>We deals in brand new fashionable products for different categories.</p>
                        </div>
                    </div>
                    <div className='row w-11/12 mx-auto mt-20 mb-20'>
                        <div className='col-lg-3 col-md-3 col-sm-8 md:pt-6 sm:pt-6 sm:mx-auto'>
                            <div class="card bg-white h-full mx-auto border-gray-200 rounded-3xl">
                                <div class="card-body pt-5">
                                    <div className='row d-flex  '>
                                        <div className='col-lg-8 mx-auto '>
                                            <img src='https://img101.urbanic.com/v1/goods-pic/2fd8f611022d4ff8bac9769e296af06fUR_w1440_q90.webp' className='img-fluid w-full h-full' alt='error'></img>
                                        </div>
                                    </div>
                                    <div className='row d-flex text-center mt-2 py-3'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 mx-auto'>
                                            <h1 className='text-black text-xl font-Poppins'>Women Wide Jeans</h1>
                                            <p className='text-stone-600 text-lg font-Poppins'>700rs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-8 md:pt-6 sm:pt-6 sm:mx-auto'>
                            <div class="card bg-white h-full mx-auto  border-gray-200 rounded-3xl">
                                <div class="card-body pt-5">
                                    <div className='row d-flex  '>
                                        <div className='col-lg-8 mx-auto '>
                                            <img src='https://www.beyoung.in/api/cache/catalog/products/new_winter_wear_5_10_2022/dark_blue_denim_jacket_for_men_base_02_12_2023_700x933.jpg' className='img-fluid w-full h-full' alt='error'></img>
                                        </div>
                                    </div>
                                    <div className='row d-flex text-center mt-2 py-3'>
                                        <div className='col-lg- col-md-6 col-sm-6 mx-auto'>
                                            <h1 className='text-black text-xl font-Poppins'>Mens Denium Jacket</h1>
                                            <p className='text-stone-600 text-lg font-Poppins'>1500rs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-8 md:pt-6 sm:pt-6 sm:mx-auto'>
                            <div class="card bg-white h-full mx-auto border-gray-200  rounded-3xl">
                                <div class="card-body pt-5">
                                    <div className='row d-flex  '>
                                        <div className='col-lg-8 mx-auto '>
                                            <img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2Fd3%2F15d38ede958bca4c6d5333be3d3a1a96e15d320a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]' className='img-fluid w-full  ' alt='error'></img>
                                        </div>
                                    </div>
                                    <div className='row d-flex text-center mt-2 py-3'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 mx-auto'>
                                            <h1 className='text-black text-xl font-Poppins'>Kids Frok Dress</h1>
                                            <p className='text-stone-600 text-lg font-Poppins'>800rs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-8 md:pt-6 sm:pt-6 sm:mx-auto'>
                            <div class="card bg-white h-full mx-auto border-gray-200 rounded-3xl">
                                <div class="card-body pt-5">
                                    <div className='row d-flex  '>
                                        <div className='col-lg-8 mx-auto '>
                                            <img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2Fd7%2F35d78727088ac973308dbafcf64222e6b4d472a9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]' className='img-fluid w-full h-full' alt='error'></img>
                                        </div>
                                    </div>
                                    <div className='row d-flex text-center mt-2 py-3'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 mx-auto'>
                                            <h1 className='text-black text-xl font-Poppins'>Boys Printed T-shirt</h1>
                                            <p className='text-stone-600 text-lg font-Poppins'>500rs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* rating */}

            <div className='row d-flex bg-stone-600 mt-10'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row d-flex mt-5 text-center'>
                        <div className='col-lg-4 col-md-6 col-sm-6 bg-stone-300 mx-auto'>
                            <h2 className='text-4xl font-AmiriQuran font-Poppins  font-semibold tracking-wide text-stone-600 pt-2 pb-2'>RATINGS AND REVIEWS</h2>
                        </div>
                    </div>
                    <div className='row d-flex text-center w-11/12 mt-5 mx-auto'>
                        <div className='col-lg-3 col-md-4 col-sm-6 mx-auto text-center'>
                            <div class="flex items-center">
                                {/* <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-10 h-10 text-yellow-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg> */}
                                <form action="">
                                    <input class="star star-5" id="star-5" type="radio" name="star" />
                                    <label class="star star-5" for="star-5"></label>
                                    <input class="star star-4" id="star-4" type="radio" name="star" />
                                    <label class="star star-4" for="star-4"></label>
                                    <input class="star star-3" id="star-3" type="radio" name="star" />
                                    <label class="star star-3" for="star-3"></label>
                                    <input class="star star-2" id="star-2" type="radio" name="star" />
                                    <label class="star star-2" for="star-2"></label>
                                    <input class="star star-1" id="star-1" type="radio" name="star" />
                                    <label class="star star-1" for="star-1"></label>
                                </form>

                            </div>
                        </div>
                        <div className='row d-flex mt-4'>
                            <div className='col-lg-4 col-md-8 col-sm-8 mx-auto'>
                                <p className='text-stone-300 text-md font-Poppins py-4 px-2'>We are having 5 star ratings from our happy customers..we sell our products globally..and we are lucky to have amazing fashion loving customers with great fashion taste they hulp us to explore brand new designs and fashion.</p>
                            </div>
                        </div>
                        <div className='row d-flex mt-3'>
                            <div className='col-lg-6 col-sm-10 col-md-10 mx-auto'>
                                <input type="text" placeholder="Enter Your Reviews" className='bg-stone-200 text-stone-600 text-xl w-full py-4 px-2 outline-none'></input>
                            </div>
                        </div>
                        <div className='row d-flex mt-3 mb-10'>
                            <div className='col-lg-3 col-md-3 col-sm-3 mx-auto'>
                                <button className='btn bg-stone-200 text-stone-600 text-xl focus:bg-stone-800 focus:text-stone-200 focus:outline-none '>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Footer */}
            <div className='row d-flex mt-40 bg-stone-600 pb-10'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row d-flex w-10/12 mx-auto mt-10'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 md:gap-y-10 sm:gap-y-10 '>
                            <div className='row d-flex '>
                                <div className='col-lg-10 col-md-8 col-sm-8 md:mx-auto sm:mx-auto'>
                                    <div className='flex gap-x-8 mx-auto '>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>HOME</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>CATEGORY</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>PRODUCTS</a>
                                        <a className='font-semibold pt-2 text-stone-200 ' href='#'>CONTACT</a>
                                    </div>
                                </div>
                                <div className='col-lg-10 col-md-6 col-sm-6 md:mx-auto sm:mx-auto'>
                                    <div className='grid gap-y-5 col-lg-11 col-md-11 col-sm-11 mx-auto'>
                                        <div className='row w-64'>
                                            <div className='col-lg-2 col-md-2 col-sm-2'>
                                                <i className="material-symbols-outlined text-stone-200 text-4xl"> phone_in_talk </i>
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10'>
                                                <p className='font-semibold text-stone-200 text-lg pt-1'>7251025888</p>
                                            </div>
                                        </div>
                                        <div className='row w-64'>
                                            <div className='col-lg-2 col-md-2 col-sm-2'>
                                                <i class="material-symbols-outlined text-stone-200 text-4xl "> mail </i>
                                            </div>
                                            <div className='col-lg-10 col-md-10 col-sm-10'>
                                                <p className='font-semibold text-stone-200 text-lg pt-1'>hello@easemypractice.net</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-flex text-center md:mt-6 sm:mt-6'>
                                <div className='col-lg-8 col-md-8 col-sm-8 bg-stone-200 mx-auto'>
                                    <h1 className='text-3xl text-stone-600 font-bold '>P O P S U G A R</h1>
                                </div>
                                <div className='col-lg-10 col-md-10 col-sm-10 mx-auto'>
                                    <p className='text-stone-300 text-md font-Poppins py-4 px-2'>All his new looks await with our stylish edit of boys' clothes. Whether you're refreshing his everyday essentials, or looking for timeless pieces he can wear all year round, we've got him covered from head to toe. Discover boys' T-Shirts and tank tops, as well as jeans, joggers and an array of trousers in all the staple colours. </p>
                                </div>
                            </div>
                            <div className='row d-flex mt-4'>
                                <div className='col-lg-7 col-md-4 col-md-4 mx-auto'>
                                    <img src='https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1' className='img-fuid'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webd