import { Mail as MailIcon, Send as SendIcon, User as UserIcon, MessageCircleCode as MessageCircleCodeIcon } from 'lucide-react'
import './Contact.style.css'
import BaseLayout from '@layouts/Base.layout'

export default function ContactPage() {
 return (
  <BaseLayout>
   <div id="contact-page">
    <h2>Contact</h2>
    <form>
     <div className="name-box">
      <label htmlFor="name">
       <UserIcon />
       <strong>Name</strong>
      </label>
      <input type="text" name="name" id="name" placeholder='Ex:Adry' />
     </div>
     <div className="email-box">
      <label htmlFor="email">
       <MailIcon />
       <strong>Email</strong>
      </label>
      <input type="email" name="email" id="email" placeholder='Ex:lorem@gmail.com' />
     </div>
     <div className='message-box'>
      <label htmlFor="message">
       <MessageCircleCodeIcon />
       <strong>Message</strong>
      </label>
      <textarea name="message" id="message" placeholder='Ex: Hi, I want to ...'></textarea>
     </div>
     <button type="submit">
      <SendIcon width={20} height={20} />
      <span>Send Message</span>
     </button>
    </form>
   </div>
  </BaseLayout>
 )
}