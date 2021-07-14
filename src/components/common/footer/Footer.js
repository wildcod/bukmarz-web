import React from 'react';
import style from './Footer.module.scss'
import forwardIcon from '../../../assets/img/forward.svg'
import locationIcon from '../../../assets/img/location.svg'
import phoneIcon from '../../../assets/img/phone.svg'
import sendIcon from '../../../assets/img/send.svg'

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.innerContainer}>
              <div className={style.about}>
                  <h3>About Company</h3>
                  <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.
                  </p>
              </div>
              <div className={style.blogPosts}>
                  <h3>Recent posts</h3>
                  <ul>
                      {
                          POSTS.map(post => (
                              <li key={post.title}>
                                  <img width={20} height={20} src={forwardIcon} alt={'forward-icon'}/>
                                  <a href={'/'}>
                                      <span>{post.title} - <span className={style.date}>{post.date}</span></span>
                                  </a>
                              </li>
                          ))
                      }
                  </ul>
              </div>
              <div className={style.tags}>
                  <h3>Popular tags</h3>
                  <div className={style.list}>
                      {
                          tags.map(tag => (
                              <span key={tag}>{tag}</span>
                          ))
                      }
                  </div>
              </div>
              <div className={style.contact}>
                  <h3>Contact Information</h3>
                  {
                      contact.map(c => (
                          <div key={c} className={style.item}>
                              <img src={c.icon} alt={'icon'} width={18} height={18}/>
                              <span>{c.text}</span>
                          </div>
                      ))
                  }
              </div>
            </div>
        </footer>
    );
};

export default Footer;

const POSTS = [
    {
        title: 'Claritas est etiam processus dynamicus, qui sequitur',
        date: 'Today'
    },
    {
        title: 'Processus dynamicus',
        date: '5 Hours Ago'
    },
    {
        title: 'Qui sequitur',
        date: 'Yesterday'
    },
    {
        title: 'Claritas est etiam ',
        date: '26.03.2019'
    }
]

const tags = ['Envato', 'Themeforest', 'Multipurpose', 'Shop', 'Business', 'UI kit', 'Wordpress', 'Clean', 'Twitter', 'Money']

const contact = [
    {
        text: '795 South Park Avenue, Door 6 Wonderland, CA 94107, Australia',
        icon: locationIcon
    },
    {
        text: '+440 875369208 - Office',
        icon : phoneIcon
    },
    {
        text: 'Support@bukmarz.com',
        icon: sendIcon
    }
]