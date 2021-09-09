import React from 'react';

const Sonnet = ({color}) => {

    const classes = "text-justify " + color

    return(
        <>
            <p className={classes}>
            Whoever hath her wish, thou hast thy 'Will,' And 'Will' to boot, and 'Will' in over-plus; 
            More than enough am I that vex'd thee still, To thy sweet will making addition thus. Wilt 
            thou, whose will is large and spacious, Not once vouchsafe to hide my will in thine? Shall 
            will in others seem right gracious, And in my will no fair acceptance shine? The sea, all 
            water, yet receives rain still, And in abundance addeth to his store;
            </p>    
        </>
    )
}

export default Sonnet