import { motion } from "framer-motion"


const ContactLinks = ({extend}) =>{
     const varients = {
          hidden: {
               y: "100%",
               opacity:0
          },
          visible:{
               y: 0,
               opacity: 1,
               transition: {
                    type: 'spring',
                    duration: .8,
                   
               }
          }
     }
    return (
        <motion.div initial ='hidden' whileInView ='visible' viewport = {{amount: 'all',once:true,}} transition={{staggerChildren: 0.1,}} className={`flex w-2/3 h-full flex-col items-start justify-center  gap-8 xs:gap-10 xl:gap-5 mx-auto dark:text-white text-black  md:w-min ${extend}`} style = {{ filter: 'drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.29))'}}>
        <motion.a  variants={varients} href = 'https://github.com/Dinesh485'  className="flex gap-5 items-center xs:gap-6 group">
                               
            <svg className="w-[40px] xs:w-[45px] xl:w-[35px]  fill-current flex-shrink-0  xl:group-hover:scale-150 xl:transition-transform xl:duration-150" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             <p className  = 'xl:-translate-x-1/2 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-150'>Github</p>
        </motion.a>
        <motion.a variants={varients}  href = 'https://www.linkedin.com/in/dinesh-ghantasala-3b49121ab/'  className="flex gap-5 items-center xs:gap-6 group">
                     
        <svg className="w-[40px] xs:w-[45px] xl:w-[35px]  fill-current flex-shrink-0  xl:group-hover:scale-150 xl:transition-transform xl:duration-150" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             <p className  = 'xl:-translate-x-1/2 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-150'>LinkedIn</p>
        </motion.a>
        <motion.a variants={varients}  href = 'https://www.facebook.com/dinesh.ghantasala.1/'  className="flex gap-5 items-center xs:gap-6 group">
                        

        <svg className="w-[40px] xs:w-[45px] xl:w-[35px]  fill-current flex-shrink-0  xl:group-hover:scale-150 xl:transition-transform xl:duration-150" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            
             <p className  = 'xl:-translate-x-1/2 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-150'>Facebook</p>
        </motion.a>
        <motion.button  variants={varients}  className="flex gap-5 items-center xs:gap-6 group">
                
        <svg className="w-[40px] xs:w-[45px] xl:w-[35px]  fill-current flex-shrink-0  xl:group-hover:scale-150 xl:transition-transform xl:duration-150" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>

            
             <p className  = 'xl:-translate-x-1/2 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-150'>Whatsapp</p>
        </motion.button>
        <motion.a variants={varients}  href = 'mailto:ghantasaladinesh@gmail.com'  className="flex gap-5 items-center xs:gap-6  w-full group">
                 


        <svg className="w-[40px] xs:w-[45px] xl:w-[35px]  fill-current flex-shrink-0   xl:group-hover:scale-150 xl:transition-transform xl:duration-150" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>

            
             <p className  = 'xl:-translate-x-1/2 xl:opacity-0 xl:group-hover:translate-x-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-150'>ghantasaladinesh<br></br>@gmail.com</p>
        </motion.a>
    </motion.div>
    )
}

export default ContactLinks