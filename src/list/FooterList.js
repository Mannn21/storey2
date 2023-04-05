import WhatsApp from '../assets/whatsapp.svg'
import Gmail from '../assets/gmail.svg'
import Instagram from '../assets/instagram.svg'

export const Sosmed = [
    {
        title: "WhatsApp",
        icon: WhatsApp,
        color: "green",
        location: `https://wa.me/${process.env.REACT_APP_WHATSAPP}`
    },
    {
        title: "Instagram",
        icon: Instagram,
        color: "crimson",
        location: `https://www.instagram.com/${process.env.REACT_APP_INSTAGRAM}`
    },
    {
        title: "Email",
        icon: Gmail,
        color: "red",
        location: `mailto:${process.env.REACT_APP_EMAIL}`
    }
]