import React from 'react'

const WhyNoUrl = () => {
  return (
    <div className='text-light h-full bg-darkpurp'>
        <div className='flex justify-center p-4 text-2xl hover:text-extralight font-bold uppercase'>
            Why use No-Url?
        </div>
        <div className='px-4 font-normal text-justify md:px-48'> In the fast-paced digital landscape, lengthy URLs can be cumbersome, messy, and challenging to share. Enter NO-URL, your ultimate solution for effortlessly shortening, organizing, and managing your links. With a sleek and intuitive interface, NO-URL is designed to make your online life easier and more efficient.
        </div>
        <div className='md:px-48'>
        <details className=''>
            <summary className ="  m-4 font-bold text-xl">Streamlined Link Shortening</summary>
            <p className='p-4 text-justify '>NoURL's primary function is simple - shorten your URLs with just a few clicks. No more copying and pasting unwieldy web addresses. Our platform ensures that your links are concise and ready to be shared across any platform.</p>
        </details>
        <details>
            <summary className ="m-4 font-bold text-xl">Secure Authentication</summary>
            <p className ="p-4 text-justify"> Your privacy matters to us. NoURL offers robust authentication and signup features, ensuring that your account is protected, and only you have access to your shortened links. Rest easy knowing your data is safe.</p>
        </details>
        <details>
            <summary className ="m-4 font-bold text-xl">Custom Short URLs:</summary>
            <p className ="p-4 text-justify">Personalize your links with NoURL's custom short URL feature. Craft memorable and branded short links that resonate with your audience, making them easier to remember and share.</p>
        </details>
        <details>
            <summary className ="m-4 font-bold text-xl">User-friendly Dashboard</summary>
            <p className ="p-4 text-justify">
                NoURL provides an organized dashboard where you can effortlessly view and manage all your shortened links. Track link performance and click-through statistics with ease.

            </p>
        </details>
        <details>
            <summary className ="m-4 font-bold text-xl">Lightning-Fast UI</summary>
            <p className ="p-4 text-justify">We understand the value of your time. NoURL boasts a blazing-fast user interface, ensuring that you can shorten, access, and share your links without any lag or delay.</p>
        </details>

        </div>
        
    </div>
  )
}

export default WhyNoUrl