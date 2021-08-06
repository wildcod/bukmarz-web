import React, {useEffect, useState} from 'react';
import s from "./LeftPanel.module.scss";
import Button from "../../../../../common/button/Button";
import UpArrow from "../../../../../../assets/img/up-arrow.svg";
import DownArrow from "../../../../../../assets/img/down-arrow.svg";

const Card = ({ heading, hasSub }) => {
    const [expanded, setExpanded] = useState(false);
    const [isShowMoreLink, setIsShowMoreLink] = useState(false);
    const [isExpandHistory, setIsExpandHistory] = useState(false);

    useEffect(() => {
        const element = document.getElementById(`ask-for-help`);
        setIsShowMoreLink(
            element?.scrollHeight > element?.clientHeight ||
            element?.scrollWidth > element?.clientWidth
        );
    }, [])

    const showMore = () => {
        setExpanded(true);
        setIsShowMoreLink(false);
    };

    return (
        <div className={s.cardContainer}>
            <h4>{heading}</h4>
            {
                hasSub ?
                    <div className={s.hasSub}>
                        <p
                            id={'ask-for-help'}
                            className={expanded ? s.expand : ''}
                        >
                            The ‘ask now’ link is solely for your convenience. If you need anything or you want to find something all you have to do is type in the ‘ask now’ link and our team will provide you with the best possible options available on the net instantly. You can then make your choice and you will be redirected to the chosen site. Hence, we bring shopping and solutions for your queries through expert recommendations at your fingertips via the best bookmark manager.
                        </p>
                        {
                            hasSub && isShowMoreLink ?
                                <a onClick={showMore}>
                                    Read More
                                </a> : null
                        }
                        <div className={s.askBtn}>
                            <Button label={'Ask Now!'} />
                        </div>
                        <div className={s.historyContainer}>
                            <h4>
                                History
                                <img
                                    src={isExpandHistory ? UpArrow : DownArrow}
                                    width={25}
                                    height={25}
                                    alt={'arrow'}
                                    onClick={() => setIsExpandHistory(!isExpandHistory)}
                                />
                            </h4>
                            <div className={`${s.body} ${isExpandHistory ? s.animation : ''}`}>

                            </div>
                        </div>
                    </div> :
                    <div className={s.body}>

                    </div>
            }
        </div>
    )
}

const LeftPanel = () => {
    return (
        <div>
            {
                CARDS.map(card => (
                    <Card
                        key={card.heading}
                        {...card}
                    />
                ))
            }
        </div>
    );
};

export default LeftPanel;

const CARDS = [
    {
        heading: 'Recommendation',
        hasSub: false
    },
    {
        heading: 'Archive',
        hasSub: false
    },
    {
        heading: 'Ask for help',
        hasSub: true
    }
]