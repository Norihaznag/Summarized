import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/pages/_app'
const FAQ = () => {
    const [state,setState] :any = useContext(ThemeContext) ;
  return (
    <div className='FAQ body w-full min-h-[50vh] h-fit mt-[4em] flex flex-col gap-3 p-3  items-center '>

        <div className="Title">
            <h1 className='text-[1.5em] font-[CircularStd-Bold] p-4'>Frequently Asked Questions (FAQ)
</h1>
        </div>

        <div className={`faq w-[95%] flex flex-col  p-4  rounded-md shadow-md ${state.Theme ? 'bg-black' : 'bg-white text-black'} `}>
            <p className='flex flex-col gap-3 text-[1.3em]  '>

                <span>
                1. What is Summarized about?
 is a Summarizing blog. We cover a wide range of topics, providing valuable insights, tips, and information to our readers.
                </span>
<span>
2. How can I subscribe to for updates?
You can easily subscribe to our blog by entering your email in the subscription box on the homepage. Subscribers receive regular updates on new posts, exclusive content, and more.
</span>

<span>
3. Do you accept guest posts?
Yes, we welcome guest contributions! If you have a unique perspective or valuable insights to share, check out our  page for more information on how to submit your article.
</span>

<span>
4. Can I suggest a topic for a future blog post?
Absolutely! We love hearing from our readers. If you have a topic you would like us to cover, feel free to contact us with your suggestions. We appreciate your input!
</span>

<span>
5. How often do you publish new content?
We strive to publish fresh and engaging content regularly. Our posting frequency may vary, but you can expect new articles at least.
</span>

<span>
6. How can I connect with . Follow us for updates, behind-the-scenes content, and to join the conversation with our community.
</span>

<span>
7. Is Summarized suitable for  beginners, professionals
Yes, Your Blog summarized caters to a diverse audience. Whether you are a , you will find valuable content tailored to your interests and knowledge level.
</span>

<span>
8. How can I contact the  team?
For general inquiries or feedback, you can reach out to us via our page. We appreciate your feedback and are happy to assist with any questions you may have.
</span>

<span>
9. Do you offer advertising or sponsorship opportunities?
Yes, we do consider advertising and sponsorship collaborations. If you are interested in partnering with , please visit our  page for more details on available opportunities.
</span>

<span>
10. How can I support?
Supporting  is easy! You can share our articles on social media, subscribe to our newsletter, and engage with our content. Additionally, consider exploring our  for exclusive merchandise that helps support the blog.
</span>

            </p>
        </div>
        
    </div>
  )
}

export default FAQ