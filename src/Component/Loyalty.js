import Navbar from './Navbar'
import Footers from './Footers'

export default function Example() {
    return (
        <>
        <Navbar/>
       <div class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">BEP Store Loyalty</h1>
            
            <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            BEP Store Loyalty adalah program berjenjang yang dapat memberikan banyak keuntungan untuk Anda. Semakin banyak Anda melakukan pesanan, maka semakin banyak juga keuntungan yang bisa Anda nikmati. Anda akan secara otomatis menjadi anggota setelah mendaftarkan akun.
            </p>
            
            <div class="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
                <div class="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                    <div class="flex flex-col items-center space-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Silver</h2>
                    </div>
                    
                    <h2 class="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">Gratis</h2>
                </div>

                <div class="flex items-center justify-between px-8 py-4 border border-blue-500 cursor-pointer rounded-xl">
                    <div class="flex flex-col items-center space-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600 dark:text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Gold</h2>
                    </div>
                    
                    
                    <div class="flex flex-col items-center space-y-1">
                        <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                            Hemat 30%
                        </div>

                        <h2 class="text-2xl font-semibold text-blue-600 dark:text-blue-500 sm:text-3xl">Rp.70.000 <span class="text-base font-medium">/6 Bulan</span></h2>
                    </div>
                </div>

                <div class="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700">
                    <div class="flex flex-col items-center space-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>

                        <h2 class="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Platinum</h2>
                    </div>

                    <div class="flex flex-col items-center space-y-1">
                            <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                Hemat 20%
                            </div>

                            <h2 class="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">Rp.160.000 <span class="text-base font-medium">/6 Bulan</span></h2>
                        </div>
                </div>
            </div>

            <div class="p-8 mt-8 space-y-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Bonus Gratis Ongkir</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Promo Member Gold</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Partner Gold</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Voucer Ulang Tahun</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Catatan Belanja</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="flex items-center justify-between text-gray-800 dark:text-gray-200">
                    <p class="textlg sm:text-xl">Unlimited users</p>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            
            <div class="flex justify-center mt-8">
                <a
                href="https://api.whatsapp.com/send/?phone=%2B6285879718354&text&app_absent=0">
                <button class="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Langganan
                </button>
                </a>
            </div>
        </div>
    </div>
    <Footers></Footers>
    </>
  )
}