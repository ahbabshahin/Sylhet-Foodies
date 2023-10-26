import React from 'react';
import './Sectiontwo.css'

const SectionTwo = () => {
    return (
       
            
            <section id="menu_list" className="sectiontwo section-padding bg-slate-800 body pb-32">
                <div className="container pt-20">
                    <div className="col-md-12 text-center mb-14">
                        <h1 className="header-h text-yellow-600 text-2xl">Menu List</h1>
                        <p className="header-p mt-6 text-xl text-yellow-600">
                            Curious which components explicitly require jQuery, our JS, a
                            omponents link below. If you’re at all .
                        </p>
                    </div>
                    <input type="radio" id="all" name="food" />
                    <label for="all" className="show_all leveled">Show All</label>
                    <input type="radio" id="breakfast" name="food" />
                    <label className="leveled" for="breakfast">Breakfast All</label>
                    <input type="radio" id="lunch" name="food" />
                    <label className="leveled" for="lunch">Lunch</label>
                    <input type="radio" id="diner" name="food" />
                    <label className="leveled" for="diner">Diner</label>

                    {/* <div className='mt-20'> */}
                    <div id='menu' className="breakfast menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            {/* <a href="/" ></a> */}
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for breakfast</a>
                            {/* <span style="left: 166px; right:44px" className="menu-line"></span> */}
                            <span className="menu-price">$10.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Poached eggs on avocado & feta toast,rancheros</span
                        >
                    </div>

                    <div className="breakfast menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for breakfast</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$22.00</span>
                        </span>
                        <span className="menu-subtitle"
                        >Kale, tomato & poached egg on toast Air fryer bacon</span
                        >
                    </div>
                    <div className="breakfast menu-restaurant  text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for breakfast</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$16.00</span>
                        </span>
                        <span className="menu-subtitle"
                        >Simple nutty pancakes Breakfast bagel club</span
                        >
                    </div>
                    <div className="breakfast menu-restaurant  text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for breakfast</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$14.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Mushroom brunch Overnight oats Easy huevos rancheros</span
                        >
                    </div>
                    {/* <!--END breakfast--> */}

                    <div className="lunch menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for lunch</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$30.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Panzanella Salad, Classic Wedge and Rice bowl</span
                        >
                    </div>

                    <div className="lunch menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for lunch</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$26.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Toasted Pita Bowl Salad Vegan and Gluten-Free Quinoa</span
                        >
                    </div>
                    <div className="lunch menu-restaurant text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for lunch</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$18.00</span>
                        </span>
                        <span className="menu-subtitle"
                        >Egg Roll in a Bowl Garden Pasta Salad With Rotini</span
                        >
                    </div>
                    <div className="lunch menu-restaurant  text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for lunch</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$19.00</span>
                        </span>
                        <span className="menu-subtitle"
                        >Black Bean and Rice Salad The Ultimate Avocado Toast</span
                        >
                    </div>
                    {/* <!--END Lunch--> */}
                    <div className="diner menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for diner</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$32.00</span>
                        </span>
                        <span className="menu-subtitle"
                        >Chicken Marsala, Salisbury Steak with  Air Fried Shrimp rice</span
                        >
                    </div>

                    <div className="diner menu-restaurant mt-20 text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for diner</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$35.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Air Fryer Fajitas Crispy Gnocchi with Sausage & Brown Butter</span
                        >
                    </div>
                    <div className="diner menu-restaurant text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for diner</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">25.99</span>
                        </span>
                        <span className="menu-subtitle"
                        >Bagel Pizza, Asparagus Frittata  Air Fried chicken </span
                        >
                    </div>
                    <div className="diner menu-restaurant text-yellow-600">
                        <span className="clearfix">
                            <a href="/" className="menu-title" data-meal-img=""
                            >food item for diner</a
                            >
                            {/* <span style="left: 166px; right: 44px" className="menu-line"></span> */}
                            <span className="menu-price">$54.99</span>
                        </span>
                        <span className="menu-subtitle"
                        > Air Fryer Salsa Verde Enchilada Pie Vermouth Air Fried Shrimp</span
                        >
                    </div>

                </div>
            </section>
       
    );
};

export default SectionTwo;