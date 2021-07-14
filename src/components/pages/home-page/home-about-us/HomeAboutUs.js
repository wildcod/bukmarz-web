import React from 'react';
import style from './HomeAboutUs.module.scss'
import Button from "../../../common/button/Button";

const HomeAboutUs = () => {
    return (
        <div className={style.homeAboutUs}>
           <div className={style.card}>
              <h2>
                  Who We Are & What We Do
              </h2>
               <div className={style.description}>
                   <h5>
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                   </h5>
                   <p>
                       Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                   </p>
               </div>
               <div className={style.readMore}>
                   <Button
                     label={'Read More >'}
                   />
               </div>
           </div>
        </div>
    );
};

export default HomeAboutUs;