import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-100 py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <p className="text-gray-700">
                        In the new era of technology, we look to the future with certainty and pride to our company and.
                    </p>
                    <div className="flex space-x-4 mt-4">
    <div className="flex items-center">
        <img src="/src/assets/image/facebook.png" alt="Facebook" className="w-6 h-6 mr-2" />
        <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
    </div>
    <div className="flex items-center">
        <img src="/src/assets/image/twitter.png" alt="Twitter" className="w-6 h-6 mr-2" />
        <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
    </div>
    <div className="flex items-center">
        <img src="/src/assets/image/instagram.jpg" alt="Instagram" className="w-6 h-6 mr-2" />
        <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
    </div>
    <div className="flex items-center">
        <img src="/src/assets/image/pinterest.png" alt="Pinterest" className="w-6 h-6 mr-2" />
        <a href="#" className="text-gray-600 hover:text-gray-800">Pinterest</a>
    </div>
</div>
                </div>

               
                <div className="w-full md:w-1/3 mb-6 md:mb-0 m-10">
                    <h3 className="font-bold mb-2 text-black">Pages</h3>
                    <ul className="text-gray-600">
                        <li><a href="#" className="hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="hover:text-gray-800">About</a></li>
                        <li><a href="#" className="hover:text-gray-800">Menu</a></li>
                        <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                        <li><a href="#" className="hover:text-gray-800">Delivery</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/3">
                    <h3 className="font-bold mb-2 text-black">Utility Pages</h3>
                    <ul className="text-gray-600">
                        <li><a href="#" className="hover:text-gray-800">Start Here</a></li>
                        <li><a href="#" className="hover:text-gray-800">Styleguide</a></li>
                        <li><a href="#" className="hover:text-gray-800">Password Protected</a></li>
                        <li><a href="#" className="hover:text-gray-800">404 Not Found</a></li>
                        <li><a href="#" className="hover:text-gray-800">Licenses</a></li>
                        <li><a href="#" className="hover:text-gray-800">Changelog</a></li>
                        <li><a href="#" className="hover:text-gray-800">View More</a></li>
                    </ul>
                </div>

               
                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <h3 className="font-bold mb-2 text-black">Follow Us On Instagram</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <img src="/src/assets/image/big-salad.jpg" alt="Instagram Post 1" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/src/assets/image/healthy food.jpg" alt="Instagram Post 2" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/src/assets/image/Download Free Vector_ High-Quality Splash of Juice with Fruits - vectorartworld_com.jpg" alt="Instagram Post 3" className="w-full h-auto rounded-lg shadow-md" />
                        <img src="/src/assets/image/Slad.jpg" alt="Instagram Post 4" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
